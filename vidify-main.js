$(document).ready(function() {
        $(".toggle-light").click(function() {
          $("body").toggleClass("night-mode");
          $(".slider").toggleClass("checked");
          if ($("body").hasClass("night-mode")) {
            localStorage.setItem("nightmode", "true");
          } else {
            localStorage.setItem("nightmode", "false");
          }
        });
        var local_Storage = localStorage.getItem("nightmode");
        if (local_Storage == "true") {
          $("body").addClass("night-mode");
          $(".slider").addClass("checked");
        } else {
          $("body").removeClass("night-mode");
          $(".slider").removeClass("checked");
        }
        $(".tb").each(function() {
          var d = $(this);
          $(".dropsss", d).click(function(n) {
            return n.preventDefault(), $div = $(".tb-menu", d), $div.toggle(), $(".tb-menu").not($div).hide(), !1
          })
        }), $("html,.drop,.drops,.dropss,.dropdwn,#backer .Label button,.share-button").click(function() {
          $(".tb-menu").hide()
          $('.recent-comments ul').empty()
          $('#numcomments').attr('value', '0')
          $('#allcomments').attr('value', '')
          $('.loading').removeClass('spinner').removeClass('load')
        }), $("html").click(function() {
          $(".tg-menu").hide()
        }), $(".tg").each(function() {
          var d = $(this);
          $(".tt_tg", d).click(function(n) {
            return n.preventDefault(), $div = $(".tg-menu", d), $div.toggle(), $(".tg-menu").not($div).hide(), !1
          })
        }), $("html,.drop,.drops,.dropss,.dropsss,#backer .Label button,.share-button").click(function() {
          $(".tg-menu").hide()
        }), $(".dd").each(function() {
          var d = $(this);
          $(".drops", d).click(function(n) {
            return n.preventDefault(), $div = $(".dd-menu", d), $div.toggle(), $(".dd-menu").not($div).hide(), !1
          })
        }), $("html,.drop,.dropss,.dropsss,.dropdwn,#backer .Label button,.share-button").click(function() {
          $(".dd-menu").hide()
        }), $(".dds").each(function() {
          var d = $(this);
          $(".dropdwn", d).click(function(n) {
            return n.preventDefault(), $div = $(".dds-menu", d), $div.toggle(), $(".dds-menu").not($div).hide(), !1
          })
        }), $("html,.drop,.drops,.dropss,.dropsss,#backer .Label button,.share-button").click(function() {
          $(".dds-menu").hide()
        })
        $('#backer .Label button').click(function(e) {
          e.stopPropagation()
          $('#backer .list-label-widget-content').toggle()
        })
        $('#backer .list-label-widget-content').click(function(e) {
          e.stopPropagation()
        })
        $('html,.drop,.drops,.dropss,.dropsss,.dropdown-link,.dropdwn,.bg_Se input,.share-button').click(function() {
          $('#backer .list-label-widget-content').hide()
        })
        $('.post-button-container span.share-button').click(function(e) {
          e.stopPropagation()
          $('.post-button-container .share-menu').toggleClass('opened')
        })
        $('html,.drop,.drops,.dropss,.tt_tg,.dropdwn,#backer .Label button').click(function() {
          $('.post-button-container .share-menu').removeClass('opened')
        })
      });
      var _0xa4ae=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x43\x72\x65\x61\x74\x65\x64\x20\x77\x69\x74\x68\x20\x3C\x69\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x66\x36\x39\x35\x64\x3B\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x68\x65\x61\x72\x74\x22\x3E\x3C\x2F\x69\x3E\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x73\x2D\x74\x68\x65\x6D\x65\x73\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x22\x3E\x46\x73\x20\x54\x68\x65\x6D\x65\x73\x3C\x2F\x61\x3E","\x68\x74\x6D\x6C","\x64\x69\x73\x70\x6C\x61\x79","\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B","\x63\x73\x73","\x23\x46\x73\x63\x6F\x6E\x74\x65\x6E\x74","\x6C\x65\x6E\x67\x74\x68","\x23\x46\x73\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x76\x69\x73\x69\x62\x6C\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x73\x2D\x74\x68\x65\x6D\x65\x73\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F","\x72\x65\x61\x64\x79"];_0xa4ae[0];var _0x8dea=[_0xa4ae[1],_0xa4ae[2],_0xa4ae[3],_0xa4ae[4],_0xa4ae[5],_0xa4ae[6],_0xa4ae[7],_0xa4ae[8],_0xa4ae[9],_0xa4ae[10],_0xa4ae[11],_0xa4ae[12]];$(document)[_0x8dea[11]](function(){$(_0x8dea[5])[_0x8dea[4]](_0x8dea[2],_0x8dea[3])[_0x8dea[1]](_0x8dea[0]);setInterval(function(){if(!$(_0x8dea[7])[_0x8dea[6]]){window[_0x8dea[9]][_0x8dea[8]]= _0x8dea[10]}},1000)})
      jQuery(document).ready(function(e) {
        e(".email-popup").on("click", function(p) {
          p.preventDefault(), e(".btn-popup").addClass("is-visible")
        }), e(".btn-popup").on("click", function(p) {
          (e(p.target).is(".btn-popup-close") || e(p.target).is(".btn-popup")) && (p.preventDefault(), e(this).removeClass("is-visible"))
        }), e(document).keyup(function(p) {
          "27" == p.which && e(".btn-popup").removeClass("is-visible")
        })
      });
      $('.copy').click(function() {
        ! function(t) {
          var e = document.createElement("textarea");
          e.value = t, document.body.appendChild(e), e.select();
          try {
            document.execCommand("copy")
          } catch (t) {
            alert("!!!")
          }
          document.body.removeChild(e)
        }(postUrl), $(".modal").append('<div class="modal-dialog"><div class="modal-dialog-content">' + copy_link + ' <svg class="modal-dialog-buttons"><use xlink:href="/responsive/sprite_v1_6.css.svg#ic_close_black_24dp" xmlns:xlink="http://www.w3.org/1999/xlink"/></svg></div></div>'), setTimeout(function() {
          $(".modal").empty()
        }, 3e3), $(".modal-dialog-buttons").click(function() {
          $(".modal").empty()
        })
      })
      var t = "https://www.facebook.com/sharer.php?u=" + postUrl,
        e = "https://plus.google.com/share?url=" + postUrl;
      $(".post-body .separator,.post-body .tr-caption-container tr:first-child td").append('<div class="shareBtn"><span class="share-fb social-wrapper" data-href="' + t + '"></span><span class="share-gg social-wrapper" data-href=' + e + "></span></div>");
      $(".tr-caption-container,.tr-caption-container a,.separator a").removeAttr("style").removeAttr("imageanchor");
      var postEl = document.getElementsByClassName('social-wrapper')
      var postCount = postEl.length;
      for (i = 0; i < postCount; i++) {
        postEl[i].addEventListener("click", function(url, w, h) {
          var url = this.getAttribute("data-href"),
            h = 450,
            w = 400,
            l = (screen.width / 2) - (w / 2),
            t = (screen.height / 2) - (h / 2);
          window.open(url, 'popUpWindow', 'height=' + h + ',width=' + w + ',left=' + l + ',top=' + t + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
        })
      }
      $('.peekar input').on('keyup', function(e) {
        var textinput = $(this).val()
        if (textinput) {
          $.ajax({
            type: 'GET',
            url: '/feeds/posts/summary',
            data: {
              'max-results': 25,
              'alt': 'json',
              'q': textinput
            },
            dataType: 'jsonp',
            success: function(data) {
              $('.results-content,.clear-text').removeClass('hidden')
              $('.results').empty()
              if (data.feed.entry) {
                for (var i = 0; i < data.feed.entry.length; i++) {
                  for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                    if (data.feed.entry[i].link[j].rel == 'alternate') {
                      var postUrl = data.feed.entry[i].link[j].href;
                      break;
                    }
                  }
                  var postTitle = data.feed.entry[i].title.$t
                  $('.results').append('<li><a href=' + postUrl + ' title="' + postTitle + '">' + '<svg viewBox="0 0 48 48"><path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-3.98 12H14v-4h20.02v4zm0 8H14v-4h20.02v4zm-6 8H14v-4h14.02v4z"></path></svg>' + postTitle + '</a></li>')
                }
              } else {
                $('.results-content').addClass('hidden')
              }
            }
          })
        } else {
          $('.results-content,.clear-text').addClass('hidden')
        }
      })
      $('.clear-text').click(function() {
        $('.peekar input').val('')
        $('.results-content,.clear-text').addClass('hidden')
        $('.results').empty()
      })
      $('.tb button.dropsss').on('click', function() {
        if ($('.tb-menu').css('display') === 'none') {
          $('.recent-comments').addClass('spinner')
          var numcomments = 10;
          $.ajax({
            type: 'GET',
            url: '/feeds/comments/summary',
            data: {
              'max-results': numcomments,
              'alt': 'json'
            },
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'getComments',
            success: function(e) {
              $('.recent-comments').removeClass('spinner')
              var totalcomments = e.feed.openSearch$totalResults.$t
              $('#allcomments').attr('value', totalcomments)
              scroll = 1
              $('.recent-comments').scroll(function() {
                var a = $('.recent-comments').scrollTop(),
                  b = parseInt($('.comments').height() - $('.recent-comments').height())
                if (a >= b) {
                  if (scroll == 1) {
                    scroll = 0
                    $('.loading').addClass('spinner').addClass('load')
                    var items = Number($('#numcomments').val())
                    items = items + numcomments
                    if (items <= totalcomments) {
                      setTimeout(function() {
                        $('#numcomments').val(items)
                        $.ajax({
                          type: 'GET',
                          url: '/feeds/comments/summary',
                          data: {
                            'max-results': numcomments,
                            'start-index': items + 1,
                            'alt': 'json'
                          },
                          dataType: 'jsonp',
                          jsonp: 'callback',
                          jsonpCallback: 'getComments',
                          success: function() {
                            scroll = 1
                            var lastcomments = items + numcomments;
                            if (lastcomments > totalcomments) {
                              $('.loading').removeClass('spinner').removeClass('load')
                            }
                          }
                        })
                      }, 1000)
                    } else {
                      $('.loading').removeClass('spinner').removeClass('load')
                    }
                  }
                }
              })
            }
          })
        } else {
          $('.recent-comments ul').empty()
          $('#numcomments').attr('value', '0')
          $('#allcomments').attr('value', '')
          $('.loading').removeClass('spinner').removeClass('load')
        }
      })
      function getComments(e) {
        if (e.feed.entry) {
          for (var t = 0; t < e.feed.entry.length; t++) {
            for (var r = 0; r < e.feed.entry[t].link.length; r++)
              if ("alternate" == e.feed.entry[t].link[r].rel) {
                var a = e.feed.entry[t].link[r].href;
                break
              }
            var n = e.feed.entry[t].published.$t,
              l = e.feed.entry[t].author[0].gd$image.src.replace("https://img1.blogblog.com/img/b16-rounded.gif", "https://lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s40"),
              s = n.substring(8, 10) + " thag " + n.substring(5, 7) + ", " + n.substring(0, 4),
              i = e.feed.entry[t].author[0].uri.$t,
              c = (e.feed.entry[t].title.$t, e.feed.entry[t].author[0].name.$t),
              o = e.feed.entry[t].summary.$t.substring(0, 150);
            function formatUrl(o) {
              if (o) {
                o = o.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function(url) {
                  var full_url = url;
                  if (!full_url.match('^https?:\/\/')) {
                    full_url = 'http://' + full_url;
                  }
                  return '<a href="' + full_url + '">' + url + '</a>';
                });
              }
              return o;
            }
            $(".recent-comments ul").append('<li><div class="rc_avatar"><img src=' + l + ' alt="' + c + '" /></div><div class="rc_block"><div class="rc_header"><span class="rc_user"><a rel="nofollow" href=' + i + ' title="' + c + '" target="_blank">' + c + '</a></span><span class="rc_date"><a rel="nofollow" href=' + a + '>' + s + '</a></span></div><p class="rc_content">' + formatUrl(o) + "</p></div></li>")
          }
        }
       
        replaceText()
      }
