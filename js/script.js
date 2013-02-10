(function($) {
    // Settings
    var repeat = localStorage.repeat || 0,
        shuffle = localStorage.shuffle || 'false',
        continous = true,
        autoplay = true,
        playlist = [{
            title: '明明就',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E6%98%8E%E6%98%8E%E5%B0%B1.mp3?w=AAA1Mg_JY246CrZrmAVAeZ3GhKKMLYgguP0CG8gQQXXgGQ'
        }, {
            title: '红尘客栈',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14676/csdj.mp3'
        }, {
            title: '爱你没差',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E7%88%B1%E4%BD%A0%E6%B2%A1%E5%B7%AE.wav?w=AAARiGHjZYoR_rL9Lr4CxJRfyEIUYAb_ONtp2dHze_x1qw'
        }, {
            title: '比较大的大提琴',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E6%AF%94%E8%BC%83%E5%A4%A7%E7%9A%84%E5%A4%A7%E6%8F%90%E7%90%B4.mp3?w=AABZm0eepy95RSqrWlwPJCRmH5iyl9Kl3SsNgQYNvksK9A'
        },{
            title: '大笨钟',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E5%A4%A7%E7%AC%A8%E9%92%9F.mp3?w=AAAJEMX0zGjrzmajD1Miv9cEGSjHVdNZg8dzLiIoqq_ZNA'
        },{
            title: '哪里都是你',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E5%93%AA%E9%87%8C%E9%83%BD%E6%98%AF%E4%BD%A0.mp3?w=AAAiJJxkaZXitTDXaf26jL66SAWXH2PAvVD7vNP9uvaHVA'
        },{
            title: '手语',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E6%89%8B%E8%AF%AD.mp3?w=AADxjdv9tWXEZNY-G1W64wKRNzG8SfNsRDBGRdBuFq68RQ'
        },{
            title: '傻笑',
            artist: 'Jay Zhou',
            album: '十二新作',
            cover: 'http://img2.ifensi.com/channelimg/titlepic/articlephotopath/2013/01/24/37394839/20130124_12.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E5%82%BB%E7%AC%91.mp3?w=AADsecdrHrikiFpLwNwfvA2c-B7-Jlnext_nwv_N88z_nA'
        },{
            title: '给我一首歌的时间',
            artist: 'Jay Zhou',
            album: '摩杰座',
            cover: 'http://www.zata.cn/files/img/200811/20081101_234600.jpg',
            mp3: 'https://dl-web.dropbox.com/get/Music/213-instrumental_music-give_me_a_time_of_song-tosk.mp3?w=AAAJenmhPzAgYpyKef1jleVVzNGBgsliseg4XwUGgjzQVQ'
        }, {
            title: '说好的幸福呢',
            artist: 'Jay Zhou',
            album: '摩杰座',
            cover: 'http://www.zata.cn/files/img/200811/20081101_234600.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14659/csdj.mp3'
        }, {
            title: '花海',
            artist: 'Jay Zhou',
            album: '摩杰座',
            cover: 'http://www.zata.cn/files/img/200811/20081101_234600.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14661/csdj.mp3'
        }, {
            title: '稻香',
            artist: 'Jay Zhou',
            album: '摩杰座',
            cover: 'http://www.zata.cn/files/img/200811/20081101_234600.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14618/csdj.mp3'
        }, {
            title: '最长的电影',
            artist: 'Jay Zhou',
            album: '我很忙',
            cover: 'http://www.zata.cn/files/img/200810/20081023_217426.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14625/csdj.mp3'
        }, {
            title: '彩虹',
            artist: 'Jay Zhou',
            album: '我很忙',
            cover: 'http://www.zata.cn/files/img/200810/20081023_217426.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14658/csdj.mp3'
        }, {
            title: '青花瓷',
            artist: 'Jay Zhou',
            album: '我很忙',
            cover: 'http://www.zata.cn/files/img/200810/20081023_217426.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14663/csdj.mp3'
        }, {
            title: '夜曲',
            artist: 'Jay Zhou',
            album: '十一月的萧邦',
            cover: 'http://pic.cnbb.com.cn/cms/uploads/allimg/100519/1542031258-0.jpg',
            mp3: 'http://csdj.so/qq.php/SergioZhao/14657/csdj.mp3'
        }, {
            title: '安静',
            artist: 'Jay Zhou',
            album: '范特西',
            cover: 'http://i.eimg.com.tw/d/alb/54/18854.300.jpg?ver=',
            mp3: 'https://dl-web.dropbox.com/get/Music/jay-%E5%AE%89%E9%9D%99.mp3?w=AAD74C564mYz48ANWS4ftw-nDyKfqjzBHVpSRjqglClenQ'
        }];

    // Load playlist
    for (var i = 0; i < playlist.length; i++) {
        var item = playlist[i];
        $('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
    }

    var time = new Date(),
        currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
        trigger = false,
        audio, timeout, isPlaying, playCounts;

    var play = function() {
            audio.play();
            $('.playback').addClass('playing');
            timeout = setInterval(updateProgress, 500);
            isPlaying = true;
        }

    var pause = function() {
            audio.pause();
            $('.playback').removeClass('playing');
            clearInterval(updateProgress);
            isPlaying = false;
        }

        // Update progress
    var setProgress = function(value) {
            var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
                ratio = value / audio.duration * 100;

            $('.timer').html(parseInt(value / 60) + ':' + currentSec);
            $('.progress .pace').css('width', ratio + '%');
            $('.progress .slider a').css('left', ratio + '%');
        }

    var updateProgress = function() {
            setProgress(audio.currentTime);
        }

        // Progress slider
        $('.progress .slider').slider({
            step: 0.1,
            slide: function(event, ui) {
                $(this).addClass('enable');
                setProgress(audio.duration * ui.value / 100);
                clearInterval(timeout);
            },
            stop: function(event, ui) {
                audio.currentTime = audio.duration * ui.value / 100;
                $(this).removeClass('enable');
                timeout = setInterval(updateProgress, 500);
            }
        });

    // Volume slider
    var setVolume = function(value) {
            audio.volume = localStorage.volume = value;
            $('.volume .pace').css('width', value * 100 + '%');
            $('.volume .slider a').css('left', value * 100 + '%');
        }

    var volume = localStorage.volume || 0.8;
    $('.volume .slider').slider({
        max: 1,
        min: 0,
        step: 0.01,
        value: volume,
        slide: function(event, ui) {
            setVolume(ui.value);
            $(this).addClass('enable');
            $('.mute').removeClass('enable');
        },
        stop: function() {
            $(this).removeClass('enable');
        }
    }).children('.pace').css('width', volume * 100 + '%');

    $('.mute').click(function() {
        if ($(this).hasClass('enable')) {
            setVolume($(this).data('volume'));
            $(this).removeClass('enable');
        } else {
            $(this).data('volume', audio.volume).addClass('enable');
            setVolume(0);
        }
    });

    // Switch track
    var switchTrack = function(i) {
            if (i < 0) {
                track = currentTrack = playlist.length - 1;
            } else if (i >= playlist.length) {
                track = currentTrack = 0;
            } else {
                track = i;
            }

            $('audio').remove();
            loadMusic(track);
            if (isPlaying == true) play();
        }

        // Shuffle
    var shufflePlay = function() {
            var time = new Date(),
                lastTrack = currentTrack;
            currentTrack = time.getTime() % playlist.length;
            if (lastTrack == currentTrack)++currentTrack;
            switchTrack(currentTrack);
        }

        // Fire when track ended
    var ended = function() {
            pause();
            audio.currentTime = 0;
            playCounts++;
            if (continous == true) isPlaying = true;
            if (repeat == 1) {
                play();
            } else {
                if (shuffle === 'true') {
                    shufflePlay();
                } else {
                    if (repeat == 2) {
                        switchTrack(++currentTrack);
                    } else {
                        if (currentTrack < playlist.length) switchTrack(++currentTrack);
                    }
                }
            }
        }

    var beforeLoad = function() {
            var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
            $('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
        }

        // Fire when track loaded completely
    var afterLoad = function() {
            if (autoplay == true) play();
        }

        // Load track
    var loadMusic = function(i) {
            var item = playlist[i],
                newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');

            $('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
            $('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
            $('#playlist li').removeClass('playing').eq(i).addClass('playing');
            audio = newaudio[0];
            audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
            audio.addEventListener('progress', beforeLoad, false);
            audio.addEventListener('durationchange', beforeLoad, false);
            audio.addEventListener('canplay', afterLoad, false);
            audio.addEventListener('ended', ended, false);
        }

    loadMusic(currentTrack);
    $('.playback').on('click', function() {
        if ($(this).hasClass('playing')) {
            pause();
        } else {
            play();
        }
    });
    $('.rewind').on('click', function() {
        if (shuffle === 'true') {
            shufflePlay();
        } else {
            switchTrack(--currentTrack);
        }
    });
    $('.fastforward').on('click', function() {
        if (shuffle === 'true') {
            shufflePlay();
        } else {
            switchTrack(++currentTrack);
        }
    });
    $('#playlist li').each(function(i) {
        var _i = i;
        $(this).on('click', function() {
            switchTrack(_i);
        });
    });

    if (shuffle === 'true') $('.shuffle').addClass('enable');
    if (repeat == 1) {
        $('.repeat').addClass('once');
    } else if (repeat == 2) {
        $('.repeat').addClass('all');
    }

    $('.repeat').on('click', function() {
        if ($(this).hasClass('once')) {
            repeat = localStorage.repeat = 2;
            $(this).removeClass('once').addClass('all');
        } else if ($(this).hasClass('all')) {
            repeat = localStorage.repeat = 0;
            $(this).removeClass('all');
        } else {
            repeat = localStorage.repeat = 1;
            $(this).addClass('once');
        }
    });

    $('.shuffle').on('click', function() {
        if ($(this).hasClass('enable')) {
            shuffle = localStorage.shuffle = 'false';
            $(this).removeClass('enable');
        } else {
            shuffle = localStorage.shuffle = 'true';
            $(this).addClass('enable');
        }
    });
})(jQuery);