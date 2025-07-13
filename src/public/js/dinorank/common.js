$(document).ready(function (e) {

	let sidebar_menu_status = localStorage.getItem('sidebar_menu_status');

	if (sidebar_menu_status === 'collapsed') {
		$('#contenedorInterior').addClass('sidebar-collapsed');
		$('#fullwidth-footer').addClass('sidebar-collapsed');
	}

	$('#interiorMenu').mouseenter(function () {
		$(this).addClass('on-scroll');
	});

	$('#interiorMenu').mouseleave(function () {
		$(this).removeClass('on-scroll');
	});

	/**
	 * Menú superior
	 */
	$('.hamburguesa').click(function (e) {
		$('#contenedorInterior .wrapper-menu').slideToggle();
	});

	$('.user-menu-wrapper').mouseenter(function (e) {
		$('.user-menu-options', this).toggle();
	});

	$('.user-menu-wrapper').mouseleave(function (e) {
		$('.user-menu-options', this).toggle();
	});

	/**
	 * Menu Lateral
	 */
	$('#toggle-sidebar').click(function (e) {
		$('#contenedorInterior').toggleClass('sidebar-collapsed');
		$('#fullwidth-footer').toggleClass('sidebar-collapsed');
		if (sidebar_menu_status == 'collapsed') {
			$('.tituloMenu').show();
			$('.separadorMenu').show();
		} else {
			$('.tituloMenu').hide();
			$('.separadorMenu').hide();
		}
		sidebar_menu_status = $('#contenedorInterior').hasClass('sidebar-collapsed') ?
			'collapsed' : null;
		localStorage.setItem('sidebar_menu_status', sidebar_menu_status);
	});

	/**
	 * Eventos comunes para todos los componentes "custom-select" de la web
	 */
	$('.custom-select').click(function (e) {
		e.stopPropagation();
		
		$(this).toggleClass('open');
		$('.select-options', this).slideToggle();
	});

	$('.select-options li').click(function (e) {
		clicked_text=$(this).html().replace( /<.*?>/g, '' );
		clicked_text=clicked_text.trim(); 
		if(clicked_text=="Añadir proyecto"){
			enviadatalayercustom_click('sidebar',"button","añadir_proyecto",$(this).html()); 
		}else{
			enviadatalayercustom_click('sidebar',"button","nombre_proyecto",$(this).html());
		}
		e.stopPropagation();

		const project_id = $(this).data('id');
		seleccionProyecto(project_id);
	});

	$(document).click(function (e) {
		$('.select-options').slideUp();
		$(this).toggleClass('open');
	});

	/**
	 * Abrir modal de añadir proyecto
	 */
	$('.add-project').click(function (e) {

		abreModal(arrayTextos['282'], "", WEB_ROOT + "ajax/common/add-project.php", "");

	});

	/**
	 * Click en botón de añadir proyecto
	 */
	$('body').on('click', '#add-project', function (e) {

		agregaDominio('usuario');

	});

	/**
	 * Ocultar/mostrar menú inferior en mobile según scroll down/up
	 */

	var last_scroll = 0;
	const browser_width = $(window).width();

	if (browser_width <= 600) {

		$(window).scroll(function () {
			const current_scroll = $(this).scrollTop();
			const is_visible = $('#interiorCabeceraCentro').is(':visible');

			if (current_scroll > last_scroll && is_visible) {
				// Scroll down
				$('#interiorCabeceraCentro').hide();
			}
			if (current_scroll < last_scroll && !is_visible) {
				$('#interiorCabeceraCentro').show();
			}

			last_scroll = current_scroll;
		});

	}

	/**
	 * Guardar preferencias de idioma de usuario
	 */

	$('.select-language').click(function (e) {
		e.preventDefault();

		const href = $(this).attr('href');
		const lang = $(this).data('language');

		$.ajax({
			type: 'GET',
			data: { lang },
			url: WEB_ROOT + '/ajax/common/set-user-language.php',
			success: function (msg) {
				window.location.href = href;
			}
		})

	});

	/************************************************************************/

});

function convert_string_to_date(string_date) {

	const date_array = string_date.split('/');
	const date = new Date(date_array[2], date_array[1] - 1, date_array[0]);

	return date;

}

function agregaDominio(modo) {

	var esValido = nuevoDominio(modo);
	if (!esValido) return false;

	const dominio = $('#nuevoDominio').val();
	const country_selected = $('#country_selected').val();
	const pais = $('#country_list option[value="' + country_selected + '"]').data('value');
	const language_selected = $('#language_selected').val();
	const idioma = $('#language_list option[value="' + language_selected + '"]').data('value');

	if (!dominio) {
		swal({
			title: arrayTextos['3'],
			text: arrayTextos['72'],
			type: "warning",
			timer: 3000
		});
		return false;
	} else if ((dominio.indexOf('.') < 2 || dominio.indexOf('@') > 0)) {
		swal({
			title: arrayTextos['3'],
			text: arrayTextos['73'],
			type: "warning",
			timer: 3000
		});
		return false;
	}

	if (!pais) {
		swal({
			title: arrayTextos['3'],
			text: arrayTextos['243'],
			type: "warning",
			timer: 3000
		});
		return false;
	}

	if (!idioma) {
		swal({
			title: arrayTextos['3'],
			text: arrayTextos['244'],
			type: "warning",
			timer: 3000
		});
		return false;
	}

	$.ajax({
		type: "POST",
		url: WEB_ROOT + "ajax/common/agregaDominio.php",
		data: {
			dominio,
			pais,
			idioma
		},
		success: function (msg) {

			if (msg.substr(0, 2) == 'ok') {
				var partes = msg.split("#");
				var id = partes[1];
				var nowtime = new Date();
				var tiempo = nowtime.getTime();

				dataLayer.push({
					'event': 'projectAdded',
					'country': pais,
					'language': idioma
				});

				if (modo != 'onboarding') {
					swal({
						title: arrayTextos['74'],
						text: arrayTextos['75'],
						type: "success",
						timer: 3000
					});
				}

				if (modo == 'usuario') {

					$('#myModal').modal('hide');
					setTimeout(function () {
						seleccionProyecto(id);
					}, 1000);

				} else if (modo == 'onboarding') {
					$.ajax({
						type: "POST",
						url: WEB_ROOT + "ajax/seleccionaProyecto.php",
						data: "t=" + tiempo + "&id=" + id,
						success: function (msg) { }
					})
					onboardingPasos('keywords');
				}

			} else if (msg == 'errorlogin') {
				location.href=WEB_ROOT + "login";
			} else {
				console.log(msg);
				swal({
					title: arrayTextos['3'],
					text: arrayTextos['76'],
					type: "warning",
					timer: 3000
				});
			}
			$("#agregarProyecto").html(msg);
		}
	})
}