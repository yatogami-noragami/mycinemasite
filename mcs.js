$(document).ready(function () {

    if ($(window).width() < 992) {
        $('.posterInfo').hide();

        $('#poster1').click(function () {
            $('#p1Info').fadeToggle();
        });

        $('#poster2').click(function () {
            $('#p2Info').fadeToggle();
        });

        $('#poster3').click(function () {
            $('#p3Info').fadeToggle();
        });

    }


    var date = '';

    $('.dateChoose').click(function () {
        $('.dateChoose').removeClass('btn-dark');
        $('.dateChoose').addClass('btn-light');
        $(this).toggleClass('btn-dark');

        switch ($(this).html()) {
            case 'Tue':
                date = $('#date1').html() + ' (' + $(this).html() + ')';
                break;
            case 'Thur':
                date = $('#date2').html() + ' (' + $(this).html() + ')';
                break;
            case 'Sat':
                date = $('#date3').html() + ' (' + $(this).html() + ')';
                break;
            case 'Sun':
                date = $('#date4').html() + ' (' + $(this).html() + ')';
                break;
        }

        $('#date').html(date);

        $('.movieChoose').fadeIn();

        $('#seatCancelAll').click();
    });

    var movieTitle = '';

    $('.movieChoose').hide();

    $('.movieChoose').click(function () {
        $('.movieChoose').removeClass('btn-dark');
        $('.movieChoose').addClass('btn-light');
        $(this).toggleClass('btn-dark');
        movieTitle = $(this).html();
        $('#movieTitle').html(movieTitle);

        switch ($(this).attr('id')) {
            case 'movie1':
                $('.hallChoose').hide();
                $('#hallA').fadeIn();
                $('#hallB').fadeIn();
                break;
            case 'movie2':
                $('.hallChoose').hide();
                $('#hallC').fadeIn();
                $('#hallD').fadeIn();
                break;
            case 'movie3':
                $('.hallChoose').hide();
                $('#hallE').fadeIn();
                $('#hallF').fadeIn();
                break;
        }

        $('#hallName').html('');

        $('#seatCancelAll').click();
    });

    var hallName = '';

    $('.hallChoose').hide();

    $('.hallChoose').click(function () {
        $('.hallChoose').removeClass('btn-dark');
        $('.hallChoose').addClass('btn-outline-light');
        $(this).toggleClass('btn-dark');
        hallName = $(this).html();
        $('#hallName').html(hallName);

        $('#seatCancelAll').fadeIn();
        $('#seatSelectionDiv').fadeIn();

        switch (hallName) {
            case 'A':
                var takenSeat = ['#A3', '#B6', '#C4', '#C5', '#C6', '#D1', '#E7', '#E8', '#F1', '#F9', '#F10'];
                break;
            case 'B':
                var takenSeat = ['#B3', '#B6', '#D4', '#D5', '#E6', '#E1', '#E7', '#A8', '#B1', '#F3', '#F7'];
                break;
            case 'C':
                var takenSeat = ['#A3', '#B6', '#C4', '#C5', '#C6', '#D1', '#E7', '#E8', '#F1', '#F9', '#F10'];
                break;
            case 'D':
                var takenSeat = ['#B3', '#B6', '#D4', '#D5', '#E6', '#E1', '#E7', '#A8', '#B1', '#F3', '#F7'];
                break;
            case 'E':
                var takenSeat = ['#A3', '#B6', '#C4', '#C5', '#C6', '#D1', '#E7', '#E8', '#F1', '#F9', '#F10'];
                break;
            case 'F':
                var takenSeat = ['#B3', '#B6', '#D4', '#D5', '#E6', '#E1', '#E7', '#A8', '#B1', '#F3', '#F7'];
                break;
        }
        $('.uniSeat').prop('disabled', false);
        $('.uniSeat').removeClass('btn-danger');
        $('.coupleSeat').prop('disabled', false);
        $('.coupleSeat').removeClass('btn-danger');

        takenSeat.forEach(element => {

            $(element).prop('disabled', true);
            $(element).addClass('btn-danger');
        });

        $('#seatCancelAll').click();
    });

    var seatNumber = '';
    var rowNumber = 6;
    var seatRow = '';
    var seatInRow = 5;
    var seatInRow2 = 10;

    var totalAmount = 0;
    $('#totalAmount').html(totalAmount);
    var singleSeatAmount = 10;
    var coupleSeatAmount = 25;

    $('#seatCancelAll').hide();
    $('#seatSelectionDiv').hide();

    for (let i = 1; i <= rowNumber; i++) {
        var seatChooseChildId = '#seatChooseChild' + i;

        if (i < 6) {
            $('#seatChooseParent').append(`
        <div class="d-flex justify-content-center mt-3 px-md-5 uniSeatRow" id="seatChooseChild${i}"></div>
        `);
        } else {
            $('#seatChooseParent').append(`
        <div class="d-flex justify-content-center mt-3 px-md-5 coupleSeatRow" id="seatChooseChild${i}"></div>
        `);
        }

        switch (i) {
            case 1:
                seatRow = 'A';
                break;
            case 2:
                seatRow = 'B';
                break;
            case 3:
                seatRow = 'C';
                break;
            case 4:
                seatRow = 'D';
                break;
            case 5:
                seatRow = 'E';
                break;
            case 6:
                seatRow = 'F';
                break;
        }

        if (i < 6) {
            for (let j = 1; j <= seatInRow; j++) {
                if (seatInRow > 9) {
                    $(seatChooseChildId).append(`
            <button class="btn btn-success mx-lg-2 mx-md-1 mx-0 fw-bold uniSeat" id="${seatRow + j}">${seatRow + j}</button>
            `);
                } else {
                    $(seatChooseChildId).append(`
            <button class="btn btn-success mx-lg-1 mx-md-1 mx-0 fw-bold uniSeat" id="${seatRow + j}">${seatRow + j}</button>
            `);
                }
            }
            j = 1;
            seatInRow += 2;
        }
        else {
            for (let k = 1; k <= seatInRow2; k++) {
                $(seatChooseChildId).append(`
            <button class="btn btn-pink mx-lg-4 mx-1 px-md-4 text-light fw-bold coupleSeat" id="${seatRow + k}">${seatRow + k}</button>
            `);
            }
        }
    }

    $('.uniSeat').click(function () {
        $(this).toggleClass('btn-dark');

        if (seatNumber.includes($(this).html() + ',')) {
            seatNumber = seatNumber.replace($(this).html() + ',', '');
            $('#seatNumber').html(seatNumber);
            totalAmount -= singleSeatAmount;
            $('#totalAmount').html(totalAmount);
        }
        else {
            seatNumber += $(this).html() + ',';
            $('#seatNumber').html(seatNumber);
            totalAmount += singleSeatAmount;
            $('#totalAmount').html(totalAmount);
        }
    });

    $('.coupleSeat').click(function () {
        $(this).toggleClass('btn-pink');
        $(this).toggleClass('btn-dark');

        if (seatNumber.includes($(this).html() + ',')) {
            seatNumber = seatNumber.replace($(this).html() + ',', '');
            $('#seatNumber').html(seatNumber);
            totalAmount -= coupleSeatAmount;
            $('#totalAmount').html(totalAmount);
        }
        else {
            seatNumber += $(this).html() + ',';
            $('#seatNumber').html(seatNumber);
            totalAmount += coupleSeatAmount;
            $('#totalAmount').html(totalAmount);
        }
    });

    $('#seatCancelAll').click(function () {
        var selectedSeatNumber = seatNumber.split(',');
        selectedSeatNumber.forEach(element => {
            if (element != '') {
                var seatId = "#" + element;
                $(seatId).click();
            }
        });
        totalAmount = 0;
        $('#totalAmount').html(totalAmount);
        $('#ticketConfirm').click();
    });

    $('#seatStatus').hide();
    $('#seatIndicator').click(function () {
        $('#seatStatus').fadeToggle();
    });


    $('#ticketConfirm').click(function () {
        $('#confirmDate').html(date);
        $('#confirmMovie').html(movieTitle);
        $('#confirmHall').html(hallName);
        $('#confirmSeat').html(seatNumber);
        $('#confirmAmount').html(totalAmount);
    });

    $('#paymentDiv').hide();

    $('#ticketConfirm').click(function () {
        if (date != '' && movieTitle != '' && hallName != '' && seatNumber != '') {
            $('#paymentDiv').fadeIn();
        }
        else {
            $('#paymentDiv').fadeOut();
        }

    });

    $('#bttBtn').hide();

    $('#bttBtn').click(function () {
        $("html, body").scrollTop(0, 500);
        $('#bttBtn i').css('color', '#F8B500');
    });

    $(window).scroll(function () {
        setTimeout(function () {
            $('#bttBtn').fadeIn();
        }, 2000);
    });

    $('.navTabsImage').click(function () {
        $('.navTabsImage').removeClass('img-thumbnail');
        $('.navTabsImage').css('transform', 'none');
        $(this).addClass('img-thumbnail');
        $(this).css('transform', 'scale(0.8,0.8)')
    });


    $(window).scroll(function () {
        if ($('#movie1').length) {
            var element = $('#movie1');
            var elementTop = element.offset().top;
            var elementBottom = elementTop + element.outerHeight();
        }

        if ($('#movie2').length) {
            var element2 = $('#movie2');
            var elementTop2 = element2.offset().top;
            var elementBottom2 = elementTop2 + element2.outerHeight();
        }

        if ($('#movie3').length) {
            var element3 = $('#movie3');
            var elementTop3 = element3.offset().top;
            var elementBottom3 = elementTop3 + element3.outerHeight();
        }

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $('#movie1Tab').addClass('img-thumbnail');
            $('#movie1Tab').css('transform', 'scale(0.8,0.8)')
            $('#MovieTabMobile1').removeClass('btn-light');
            $('#MovieTabMobile1').addClass('btn-warning');
        } else {
            $('#movie1Tab').removeClass('img-thumbnail');
            $('#movie1Tab').css('transform', 'none')
            $('#MovieTabMobile1').removeClass('btn-warning');
            $('#MovieTabMobile1').addClass('btn-light');
        }

        if (elementBottom2 > viewportTop && elementTop2 < viewportBottom) {
            $('#movie2Tab').addClass('img-thumbnail');
            $('#movie2Tab').css('transform', 'scale(0.8,0.8)')
            $('#MovieTabMobile2').removeClass('btn-light');
            $('#MovieTabMobile2').addClass('btn-warning');
        } else {
            $('#movie2Tab').removeClass('img-thumbnail');
            $('#movie2Tab').css('transform', 'none')
            $('#MovieTabMobile2').removeClass('btn-warning');
            $('#MovieTabMobile2').addClass('btn-light');
        }

        if (elementBottom3 > viewportTop && elementTop3 < viewportBottom) {
            $('#movie3Tab').addClass('img-thumbnail');
            $('#movie3Tab').css('transform', 'scale(0.8,0.8)')
            $('#MovieTabMobile3').removeClass('btn-light');
            $('#MovieTabMobile3').addClass('btn-warning');
        } else {
            $('#movie3Tab').removeClass('img-thumbnail');
            $('#movie3Tab').css('transform', 'none')
            $('#MovieTabMobile3').removeClass('btn-warning');
            $('#MovieTabMobile3').addClass('btn-light');
        }
    });

    $('.navTabsMobileBtn').click(function () {
        $('.navTabsMobileBtn').removeClass('btn-warning');
        $('.navTabsMobileBtn').addClass('btn-light');
        $(this).removeClass('btn-light');
        $(this).addClass('btn-warning');
    });

    animateFloatingElement();
    function animateFloatingElement() {
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var randomX1 = Math.floor(Math.random() * screenWidth);
        var randomY1 = Math.floor(Math.random() * screenHeight);

        $(".floating-element").animate({
            top: randomY1 + "px",
            left: randomX1 + "px",
            right: randomX1 + "px",
            bottom: randomY1 + "px",
        }, 5000, function () {
            animateFloatingElement();
        });
    }

    //Password SHow/Hide
    $('#pswShowHide').click(function () {
        $('#eye').toggleClass('fa-eye');
        $('#eye').toggleClass('fa-eye-slash');
        if ($('#eye').hasClass('fa-eye')) {
            $('#password').prop('type', 'password')
            $('#passwordConfirm').prop('type', 'password')
            $('#eyeLabel').html('show password');
        }
        else {
            $('#password').prop('type', 'text')
            $('#passwordConfirm').prop('type', 'text')
            $('#eyeLabel').html('hide password');
        }
    });

    $('.emojiBtn').click(function () {
        $('.emojiBtn').removeClass('text-warning');
        $('.emojiBtn').addClass('text-light');
        $(this).removeClass('text-light');
        $(this).addClass('text-warning');
    });

});