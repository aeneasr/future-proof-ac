//edited
chrome.browserAction.onClicked.addListener(function (activeTab) {
//setTimeout(function(){ chrome.runtime.reload(); }, 5000);

  hosgeldin = localStorage.getItem("hosgeldin");


  if (hosgeldin === null) {
    localStorage.setItem("hosgeldin", "true");
    chrome.tabs.create({ url: 'https://followermonkey.com/defindex/welcome' });
  }


  chrome.tabs.query({ 'url': 'https://www.instagram.com/*' }, function (tabs) {
    if (tabs.length == 0)
      chrome.tabs.create({ url: 'https://www.instagram.com/' });

    tabs.forEach(function (tab) {
      chrome.tabs.reload(tab.id)
    });


  });


  var newURL = chrome.extension.getURL('index.html');
  chrome.tabs.create({ url: newURL });


});


function detectLanguage(inputText, donus) {
  chrome.i18n.detectLanguage(inputText, function (result) {

    if (result.languages.length == 0) {
      donus(false);

    }
    else {
      sonuc = result.languages[0].language

      donus(sonuc);
    }


  });
}


Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}


function yorum_ayikla(yorum) {

  arr1 = yorum.split("[");

  var yeni_yorum = "";
  for (i = 0; i < arr1.length; ++i) {


    if (i == 0) {
      yeni_yorum = yeni_yorum + arr1[i];
    }
    else {
      arr2 = arr1[i].split("]");
      if (arr2.length == 2) {
        rastgele = arr2[0].split(",").random();

        yeni_yorum = yeni_yorum + rastgele + arr2[1];
      }
      else yeni_yorum = yeni_yorum + "[" + arr2[0];

    }
  }

  return yeni_yorum;
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function is_gonder(mesaji) {

  //console.log(mesaji)
  chrome.tabs.query({ 'url': 'https://www.instagram.com/*' }, function (tabs) {
    if (tabs.length > 0) {

      chrome.tabs.query({ 'url': 'chrome-extension://' + chrome.runtime.id + '/*' }, function (tabs2) {
        if (tabs2.length > 0) {

          chrome.tabs.sendMessage(tabs[0].id, mesaji);
        }

      });
    }


  });
}

function collect_followers(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'collect_from_followers'));
  if (gecen_zaman < parseInt(my_cookie2(user_id, 'collect_from_followers_interval')) * 1000)
    return;

  my_cookie2(user_id, 'collect_from_followers', Date.now());


  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM followers_jobs ORDER BY check_time limit 1', [], function (tx, results) {
      var len = results.rows.length;

      if (len == 0)
        return;

      db_sql[user_id].transaction(function (tz) {
        tz.executeSql('UPDATE followers_jobs SET check_time=' + Date.now() + ' WHERE user_id="' + results.rows.item(0).user_id + '";');
      });

      is_gonder({
        "option": "collect_followers",
        "user_id": results.rows.item(0).user_id,
        "cursor": results.rows.item(0).cursor
      })


    }, null);
  });


}


function isInt(value) {
  return !isNaN(value) && (function (x) {
    return (x | 0) === x;
  })(parseFloat(value))
}


function do_follow(user_id) {


  if (my_cookie2(user_id, 'following_status') == "false")
    return;


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_follow_time'));


  if (gecen_zaman < parseInt(my_cookie2(user_id, 'follow_interval')) * 1000)
    return;


  var date = new Date;

  var minutes = date.getMinutes();
  var hour = date.getHours();

  simdi = hour * 60 * 60 * 1000 + minutes * 60 * 1000;


  my_cookie2(user_id, 'last_follow_time', Date.now());

  yeni_rastgele_follow = getRandomInt(parseInt(my_cookie2(user_id, 'follow_interval_1')), parseInt(my_cookie2(user_id, 'follow_interval_2')));

  my_cookie2(user_id, 'follow_interval', yeni_rastgele_follow);


  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM sleep_times_follow where start_time<' + simdi + ' and end_time>' + simdi, [], function (
      tx,
      results
    ) {
      var len = results.rows.length;

      if (len > 0)
        return;


      var kontrol_kodu = Date.now();


      db_index[user_id].transaction(["follows_done"], "readonly").objectStore("follows_done").index("follow_time").count(IDBKeyRange.bound(Date.now() - 24 * 60 * 60 * 1000, Date.now())).onsuccess = function (e) {

        if (e.target.result < parseInt(my_cookie2(user_id, 'follow_limit'))) {

          db_index[user_id].transaction(["follows"], "readonly").objectStore("follows").openCursor(IDBKeyRange.upperBound("Z", true), 'next').onsuccess = function (e) {
            var cursor = e.target.result;

            if (cursor) {

              if (cursor.value != null && cursor.value != undefined) {


                is_gonder({ "option": "do_follow", "who_follow": cursor.value })


              }


            }

          }

        }
      }


    }, null);
  });


}


function do_unfollow(user_id) {


  if (my_cookie2(user_id, 'unfollowing_status') == "false")
    return;

  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_unfollow_time'));


  if (gecen_zaman < parseInt(my_cookie2(user_id, 'unfollow_interval')) * 1000)
    return;


  var date = new Date;

  var minutes = date.getMinutes();
  var hour = date.getHours();

  simdi = hour * 60 * 60 * 1000 + minutes * 60 * 1000;


  my_cookie2(user_id, 'last_unfollow_time', Date.now());


  yeni_rastgele_follow = getRandomInt(parseInt(my_cookie2(user_id, 'unfollow_interval_1')), parseInt(my_cookie2(user_id, 'unfollow_interval_2')));

  my_cookie2(user_id, 'unfollow_interval', yeni_rastgele_follow);


  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM sleep_times_unfollow where start_time<' + simdi + ' and end_time>' + simdi, [], function (
      tx,
      results
    ) {
      var len = results.rows.length;


      if (len > 0)
        return;


      db_index[user_id].transaction(["unfollows"], "readonly").objectStore("unfollows").index("unfollow_time").count(IDBKeyRange.bound(Date.now() - 24 * 60 * 60 * 1000, Date.now())).onsuccess = function (e) {


        if (e.target.result < parseInt(my_cookie2(user_id, 'unfollow_limit'))) {


          db_index[user_id].transaction(["unfollows_waiting"], "readonly").objectStore("unfollows_waiting").index('follow_time').openCursor(IDBKeyRange.upperBound("z"), 'next').onsuccess = function (e) {
            var cursor = e.target.result;

//console.log("unfollowwwww---"+cursor)

            if (cursor) {

              if (cursor.value != null && cursor.value != undefined) {
                //burada kaldım
                is_gonder({ "option": "do_unfollow", "who_unfollow": cursor.value })
                my_cookie2(user_id, 'last_unfollow_time', Date.now() + 30000);

              }


            }

          }

        }
      }


    }, null);
  });


}


function do_comment(user_id) {


  if (my_cookie2(user_id, 'comments_status') == "false")
    return;


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_comments_time'));


  if (gecen_zaman < parseInt(my_cookie2(user_id, 'comments_interval')) * 1000)
    return;


  my_cookie2(user_id, 'last_comments_time', Date.now());


  function send_comment() {

    db_sql_comments[user_id].transaction(function (tx1) {
      tx1.executeSql('SELECT * FROM comments where comments_time=0 order by insert_time limit 1', [], function (
        tx1,
        results1
      ) {
        var len1 = results1.rows.length;

        if (len1 == 0)
          return;

        db_sql_comments[user_id].transaction(function (tx2) {
          tx2.executeSql('SELECT * FROM comments_list', [], function (tx2, results2) {
            var len2 = results2.rows.length


            if (len2 == 0)
              return;

            var i = Math.floor(Math.random() * len2);


            is_gonder({
              'option': 'do_comment',
              'media_id': results1.rows.item(0).media_id,
              'slug': results1.rows.item(0).slug,
              'comment': yorum_ayikla(results2.rows.item(i).comment)
            });


          }, null);
        });


      }, null);
    });

  }


  var date = new Date;

  var minutes = date.getMinutes();
  var hour = date.getHours();

  simdi = hour * 60 * 60 * 1000 + minutes * 60 * 1000;


  db_sql_comments[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM sleep_times_comments where start_time<' + simdi + ' and end_time>' + simdi, [], function (
      tx,
      results
    ) {
      var len = results.rows.length;

      if (len > 0)
        return;


      db_sql_comments[user_id].transaction(function (tx3) {
        tx3.executeSql('SELECT * FROM comments where comments_time>' + (Date.now() - 24 * 60 * 60 * 1000), [], function (
          tx3,
          results3
        ) {


          var len3 = results3.rows.length


          if (len3 > parseInt(my_cookie2(user_id, 'comments_limit')))
            return;


          send_comment();


        }, null);
      });


    }, null);
  });


}


function do_like(user_id) {

//console.log("ilk cagırış 1")

  if (my_cookie2(user_id, 'like_status') == "false")
    return;

//console.log("ilk cagırış 2")


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_like_time'));
  if (gecen_zaman < parseInt(my_cookie2(user_id, 'like_interval')) * 1000)
    return;

//console.log("ilk cagırış 3")

  my_cookie2(user_id, 'last_like_time', Date.now());


  function send_like() {

    db_sql[user_id].transaction(function (tx) {
      tx.executeSql('SELECT * FROM likes where likes_time=0 order by insert_time limit 1', [], function (tx, results) {
        var len = results.rows.length;

        if (len == 0)
          return;

        is_gonder({
          'option': 'do_like',
          'media_id': results.rows.item(0).media_id,
          'slug': results.rows.item(0).slug
        });


      }, null);
    });

  }


  var date = new Date;

  var minutes = date.getMinutes();
  var hour = date.getHours();

  simdi = hour * 60 * 60 * 1000 + minutes * 60 * 1000;


  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM sleep_times_like where start_time<' + simdi + ' and end_time>' + simdi, [], function (
      tx,
      results
    ) {
      var len = results.rows.length;

      if (len > 0)
        return;


      db_sql[user_id].transaction(function (tx) {
        tx.executeSql('SELECT * FROM likes where likes_time>' + (Date.now() - 24 * 60 * 60 * 1000), [], function (
          tx,
          results
        ) {
          var len = results.rows.length

          if (len > parseInt(my_cookie2(user_id, 'like_limit')))
            return;


          send_like();


        }, null);
      });


    }, null);
  });


}


function kullanicilar_var_mi(user_id, kullanicilar, ayiklanmis_kullanicilar) {


  if (Object.keys(kullanicilar).length == 0) {


    is_gonder({ 'option': 'follow_filter', 'users': ayiklanmis_kullanicilar });


    return false;
  }


  key = Object.keys(kullanicilar)[0];
  value = kullanicilar[key];


  delete kullanicilar[key];


  new_key = key.toString();


  db_index[user_id].transaction(["follows_done"], "readonly").objectStore("follows_done").index("user_id").get(IDBKeyRange.only(new_key))
    .onsuccess = function (e) {

    if (!e.target.result) {
      db_index[user_id].transaction(["unfollows"], "readonly").objectStore("unfollows").index("user_id").get(IDBKeyRange.only(new_key))
        .onsuccess = function (e) {

        if (!e.target.result) {

          db_index[user_id].transaction(["follows"], "readonly").objectStore("follows").index("user_id").get(IDBKeyRange.only(new_key))
            .onsuccess = function (e) {

            if (!e.target.result) {

              db_sql_filters[user_id].transaction(function (tx) {
                tx.executeSql('SELECT * FROM users where user_id="' + new_key + '"', [], function (tx, results) {
                  var len = results.rows.length;

                  if (len == 0)
                    ayiklanmis_kullanicilar[key] = value;

                  kullanicilar_var_mi(user_id, kullanicilar, ayiklanmis_kullanicilar);


                }, null);
              });

            }
            else
              kullanicilar_var_mi(user_id, kullanicilar, ayiklanmis_kullanicilar);


          }


        }
        else
          kullanicilar_var_mi(user_id, kullanicilar, ayiklanmis_kullanicilar);
      }
    }
    else
      kullanicilar_var_mi(user_id, kullanicilar, ayiklanmis_kullanicilar);
  }


}


function get_from_medias(medias, user_id, kimler, kullanicilar) {


//console.log(medias);


  if (medias.length == 0) {

    if (Object.keys(kullanicilar).length > 0) {

      kullanicilar_var_mi(user_id, kullanicilar, {})
    }
    return;
  }

  $.ajax({
    //url: "https://api.instagram.com/v1/users/"+results.rows.item(0).user_id+"/media/recent?client_id=5d894035c6d04bc3978dd036108c712&_="+Date.now(),
    url: "https://www.instagram.com/p/" + medias[0].code + "/?__a=1",
    method: "GET"
  }).done(function (data) {


    if (kimler.comments == 1) {

      data.graphql.shortcode_media.edge_media_to_comment.edges.forEach(function (entry) {

        kullanicilar[entry.node.owner.id] = entry.node.owner.username;
        //if(kullanicilar.indexOf({"id":entry.node.owner.id,"username":entry.node.owner.username})==-1)
        //kullanicilar.push({"id":entry.node.owner.id,"username":entry.node.owner.username});
        //insert_pool2(entry.node.owner,user_id);
      });
    }


    if (kimler.likes == 1) {
      data.graphql.shortcode_media.edge_media_preview_like.edges.forEach(function (entry) {

        kullanicilar[entry.node.id] = entry.node.username;
        //if(kullanicilar.indexOf(entry.node.username)==-1)
        //  kullanicilar[entry.node.id]=entry.node.username;
        //kullanicilar.push(entry.node.username);
        //insert_pool2(entry.node,user_id);

      });
    }

    if (kimler.owner == 1) {
      kullanicilar[data.graphql.shortcode_media.owner.id] = data.graphql.shortcode_media.owner.username;
      //if(kullanicilar.indexOf(data.graphql.shortcode_media.owner.username)==-1)
      //  kullanicilar[data.graphql.shortcode_media.owner.id]=data.graphql.shortcode_media.owner.username;
      //kullanicilar.push(data.graphql.shortcode_media.owner.username);
      //insert_pool2(data.graphql.shortcode_media.owner,user_id);
    }


//console.log(kullanicilar);


    medias.shift();
    get_from_medias(medias, user_id, kimler, kullanicilar);

  });


}


function get_from_medias2(medias, user_id, kimler, kullanicilar) {


//console.log(medias);


  if (medias.length == 0) {

    if (Object.keys(kullanicilar).length > 0) {

      kullanicilar_var_mi(user_id, kullanicilar, {})
    }
    return;
  }

  $.ajax({
    //url: "https://api.instagram.com/v1/users/"+results.rows.item(0).user_id+"/media/recent?client_id=5d894035c6d04bc3978dd036108c712&_="+Date.now(),
    url: "https://www.instagram.com/p/" + medias[0].node.shortcode + "/?__a=1",
    method: "GET"
  }).done(function (data) {


    if (kimler.comments == 1) {

      data.graphql.shortcode_media.edge_media_to_comment.edges.forEach(function (entry) {

        kullanicilar[entry.node.owner.id] = entry.node.owner.username;
        //if(kullanicilar.indexOf({"id":entry.node.owner.id,"username":entry.node.owner.username})==-1)
        //kullanicilar.push({"id":entry.node.owner.id,"username":entry.node.owner.username});
        //insert_pool2(entry.node.owner,user_id);
      });
    }


    if (kimler.likes == 1) {
      data.graphql.shortcode_media.edge_media_preview_like.edges.forEach(function (entry) {

        kullanicilar[entry.node.id] = entry.node.username;
        //if(kullanicilar.indexOf(entry.node.username)==-1)
        //  kullanicilar[entry.node.id]=entry.node.username;
        //kullanicilar.push(entry.node.username);
        //insert_pool2(entry.node,user_id);

      });
    }

    if (kimler.owner == 1) {
      kullanicilar[data.graphql.shortcode_media.owner.id] = data.graphql.shortcode_media.owner.username;
      //if(kullanicilar.indexOf(data.graphql.shortcode_media.owner.username)==-1)
      //  kullanicilar[data.graphql.shortcode_media.owner.id]=data.graphql.shortcode_media.owner.username;
      //kullanicilar.push(data.graphql.shortcode_media.owner.username);
      //insert_pool2(data.graphql.shortcode_media.owner,user_id);
    }


//console.log(kullanicilar);


    medias.shift();
    get_from_medias2(medias, user_id, kimler, kullanicilar);

  });


}


function collect_commenters(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'collect_from_commenters'));
  if (gecen_zaman < parseInt(my_cookie2(user_id, 'collect_from_commenters_interval')) * 1000)
    return;

  my_cookie2(user_id, 'collect_from_commenters', Date.now());


  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM commenters_jobs ORDER BY check_time limit 1', [], function (tx, results) {
      var len = results.rows.length;

      if (len == 0)
        return;


      db_sql[user_id].transaction(function (tz) {
        tz.executeSql('UPDATE commenters_jobs SET check_time=' + Date.now() + ' WHERE user_id="' + results.rows.item(0).user_id + '";');
      });


      $.ajax({
        //url: "https://api.instagram.com/v1/users/"+results.rows.item(0).user_id+"/media/recent?client_id=5d894035c6d04bc3978dd036108c712&_="+Date.now(),
        url: "https://www.instagram.com/" + results.rows.item(0).screen_name + "/?__a=1",
        method: "GET"
      }).done(function (data) {

        if (results.rows.item(0).hasOwnProperty('comments'))
          yorumlar = results.rows.item(0).comments;
        else
          yorumlar = 1;

        if (results.rows.item(0).hasOwnProperty('likes'))
          begeniler = results.rows.item(0).likes;
        else
          begeniler = 1;

        get_from_medias(data.user.media.nodes, user_id, { 'owner': 0, 'comments': yorumlar, 'likes': begeniler }, {});


      }).fail(function (xhr, textStatus, errorThrown) {
        my_cookie2(user_id, 'collect_from_commenters', Date.now() + parseInt(my_cookie2(user_id, 'collect_from_commenters_error_interval')) * 1000);

      });


    }, null);
  });


}

function collect_locations(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'collect_from_locations'));
  if (gecen_zaman < parseInt(my_cookie2(user_id, 'collect_from_locations_interval')) * 1000)
    return;

  my_cookie2(user_id, 'collect_from_locations', Date.now());


  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM locations_jobs ORDER BY check_time limit 1', [], function (tx, results) {
      var len = results.rows.length;
      //console.log("geldi");
      if (len == 0)
        return;

      db_sql[user_id].transaction(function (tz) {
        tz.executeSql('UPDATE locations_jobs SET check_time=' + Date.now() + ' WHERE q="' + results.rows.item(0).q + '";');
      });


      is_gonder({
        'option': 'collect_from_location',
        'location': results.rows.item(0).q,
        'owner': results.rows.item(0).owner,
        'comments': results.rows.item(0).comments,
        'likes': results.rows.item(0).likes
      })


    }, null);
  });


}


function delete_old_user_filters(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_user_filters_delete_time'));


  if (gecen_zaman < 60000)
    return;


  db_sql_filters[user_id].transaction(function (tz) {

    tz.executeSql('DELETE from users WHERE insert_time<' + (Date.now() - 26 * 60 * 60 * 1000));

    my_cookie2(user_id, 'last_user_filters_delete_time', Date.now())
  });


}


function delete_old_likes(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_like_delete_time'));


  if (gecen_zaman < 60000)
    return;


  db_sql[user_id].transaction(function (tz) {

    tz.executeSql('DELETE from likes WHERE likes_time>0 and likes_time<' + (Date.now() - 26 * 60 * 60 * 1000));

    my_cookie2(user_id, 'last_like_delete_time', Date.now())
  });


}


function delete_old_comments(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_comments_delete_time'));


  if (gecen_zaman < 60000)
    return;


  db_sql_comments[user_id].transaction(function (tz) {

    tz.executeSql('DELETE from comments WHERE comments_time>0 and comments_time<' + (Date.now() - 150 * 60 * 60 * 1000));

    my_cookie2(user_id, 'last_comments_delete_time', Date.now())
  });


}

function delete_old_error(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_error_delete_time'));
  if (gecen_zaman < 60000)
    return;

  db_sql[user_id].transaction(function (tz) {

    tz.executeSql('DELETE from error_log WHERE error_time<' + (Date.now() - 26 * 60 * 60 * 1000));
    my_cookie2(user_id, 'last_error_delete_time', Date.now())
  });


}


function collect_likes_from_home(user_id) {


//console.log("collect_likes_from_home 1")

  if (my_cookie2(user_id, 'like_status') == "false")
    return;


  if (my_cookie2(user_id, 'home_like_status') == "false")
    return;

  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'collect_from_likes_home'));
  if (gecen_zaman < 60000)
    return;

  my_cookie2(user_id, 'collect_from_likes_home', Date.now());


//console.log("collect_likes_from_home 2")

  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM likes where likes_time=0', [], function (tx, results) {
      var len = results.rows.length

//console.log("collect_likes_from_home 3")

      if (len < 100) {
        //console.log("collect_likes_from_home 4")
        is_gonder({ 'option': 'collect_likes_from_home' })


      }


    }, null);
  });


}


function collect_likes_from_tag(user_id) {


//console.log("collect_likes_from_tag 1")

  if (my_cookie2(user_id, 'like_status') == "false")
    return;

  if (my_cookie2(user_id, 'tag_like_status') == "false")
    return;


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'collect_from_likes_tag'));
  if (gecen_zaman < 60000)
    return;

  my_cookie2(user_id, 'collect_from_likes_tag', Date.now());


  //console.log("collect_likes_from_tag 2")

  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM likes where likes_time=0', [], function (tx, results) {
      var len = results.rows.length

      //console.log("collect_likes_from_tag 3")

      if (len < 100) {

//console.log("collect_likes_from_tag 3")
        db_sql[user_id].transaction(function (tx) {
          tx.executeSql('SELECT * FROM likes_jobs ORDER BY check_time limit 1', [], function (tx, results) {
            var len = results.rows.length;


            //console.log("collect_likes_from_tag 4")
            if (len == 0)
              return;

            db_sql[user_id].transaction(function (tz) {
              tz.executeSql('UPDATE likes_jobs SET check_time=' + Date.now() + ' WHERE q="' + results.rows.item(0).q + '";');
            });


            $.ajax({
              url: "https://www.instagram.com/explore/tags/" + results.rows.item(0).q + "/?__a=1",
              method: "GET"
            }).done(function (data) {

              //console.log(data);

              data.graphql.hashtag.edge_hashtag_to_media.edges.forEach(function (entry) {

                db_sql[user_id].transaction(function (tz) {
                  tz.executeSql('INSERT INTO likes (user_id, media_id, slug, image, insert_time, likes_time)  VALUES ("' + entry.node.owner.id + '", "' + entry.node.id + '", "' + entry.node.shortcode + '", "' + entry.node.display_url + '",  ' + Date.now() + ',0);');

                });


              });


            }).fail(function (xhr, textStatus, errorThrown) {
              my_cookie2(user_id, 'collect_from_likes_tag', Date.now() + 600000);

            });


          }, null);
        });


      }


    }, null);
  });


}


function collect_searches(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'collect_from_searches'));
  if (gecen_zaman < parseInt(my_cookie2(user_id, 'collect_from_searches_interval')) * 1000)
    return;

  my_cookie2(user_id, 'collect_from_searches', Date.now());


  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM searches_jobs ORDER BY check_time limit 1', [], function (tx, results) {
      var len = results.rows.length;

      if (len == 0)
        return;

      db_sql[user_id].transaction(function (tz) {
        tz.executeSql('UPDATE searches_jobs SET check_time=' + Date.now() + ' WHERE q="' + results.rows.item(0).q + '";');
      });


      $.ajax({
        //url: "https://api.instagram.com/v1/tags/"+results.rows.item(0).q+"/media/recent/?access_token=1029480207.b59fbe4.7550ccbf7d2e47539702ffccae793b22&_="+Date.now(),
        url: "https://www.instagram.com/explore/tags/" + results.rows.item(0).q + "/?__a=1",
        method: "GET"
      }).done(function (data) {


//console.log(data)


        get_from_medias2(data.graphql.hashtag.edge_hashtag_to_media.edges, user_id, results.rows.item(0), {})


      }).fail(function (xhr, textStatus, errorThrown) {
        my_cookie2(user_id, 'collect_from_searches', Date.now() + parseInt(my_cookie2(user_id, 'collect_from_searches_error_interval')) * 1000);

      });


    }, null);
  });


}


function do_collects(user_id) {

  if (my_cookie2(user_id, 'pool_collect_status') == "false")
    return;


//console.log(db_index[user_id])

  if (!db_index[user_id]) {
    console.log(db_index, user_id, 'does not exist')
    return;
  }

  var request = db_index[user_id].transaction(["follows"], "readonly").objectStore("follows").count();

  request.onsuccess = function (e) {

    if (e.target.result > 1000)
      return;

    if (e.target.result > parseInt(my_cookie2(user_id, 'pool_limit')))
      return;

    collect_followers(user_id);
    collect_locations(user_id);

    collect_commenters(user_id);

    collect_searches(user_id);


  };


}


function collect_white_list(user_id) {


  if (my_cookie2(user_id, 'collect_white_list') == "false")
    return;

  if (my_cookie2(user_id, 'collect_likes_white_list') == "false" && my_cookie2(user_id, 'collect_comments_white_list') == "false")
    return;


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'collect_white_list_last_time'));
  if (gecen_zaman < 100000)
    return;

  my_cookie2(user_id, 'collect_white_list_last_time', Date.now());


  is_gonder({
    "option": "collect_white_list",
    "collect_likes_white_list": my_cookie2(user_id, 'collect_likes_white_list'),
    "collect_comments_white_list": my_cookie2(user_id, 'collect_comments_white_list')
  });


}


function white_list_search(user_id) {


  if (my_cookie2(user_id, 'white_list_cursor') == "end")
    return;


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_white_list_scan_time'));
  if (gecen_zaman < 60000)
    return;

  my_cookie2(user_id, 'last_white_list_scan_time', Date.now());


  is_gonder({ "option": "white_list_search", "cursor": my_cookie2(user_id, 'white_list_cursor') });


}


function unfollow_search(user_id) {


  if (my_cookie2(user_id, 'unfollow_cursor') == "end")
    return;


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_unfollow_scan_time'));
  if (gecen_zaman < 40000)
    return;

  my_cookie2(user_id, 'last_unfollow_scan_time', Date.now());


  is_gonder({ "option": "unfollow_search", "cursor": my_cookie2(user_id, 'unfollow_cursor') });


}

function do_auto_unfollow(user_id) {


//"last_auto_unfollow_time":Date.now(),auto_unfollow_days

  if (my_cookie2(user_id, 'auto_unfollow_enable') == "false")
    return;


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_auto_unfollow_time'));

//console.log(gecen_zaman);
//console.log(86400000*parseInt(my_cookie2(user_id,'auto_unfollow_days')))
  if (gecen_zaman < 86400000 * parseInt(my_cookie2(user_id, 'auto_unfollow_days')))
    return;

  my_cookie2(user_id, 'last_auto_unfollow_time', Date.now());

  my_cookie2(user_id, 'unfollow_cursor', 'bos');


}


function check_insta_tab() {


  chrome.tabs.query({ 'url': 'https://www.instagram.com/*' }, function (tabs) {
    if (tabs.length > 0)
      mesaji = { 'option': 'check_insta_tab', 'durum': true };
    else
      mesaji = { 'option': 'check_insta_tab', 'durum': false };

    chrome.tabs.query({ 'url': 'chrome-extension://' + chrome.runtime.id + '/*' }, function (tabs2) {

      tabs2.forEach(function (tab) {
        chrome.tabs.sendMessage(tab.id, mesaji);
      });


    });


  });

}


function do_jobs() {


  user_id = my_cookie2('genel', 'user_id');

  if (user_id == null)
    return;


  if (!db_sql.hasOwnProperty(user_id))
    connect_sql_db(user_id);


  do_collects(user_id);


  unfollow_search(user_id);

  do_auto_unfollow(user_id);

  white_list_search(user_id);

  collect_white_list(user_id);

  do_unfollow(user_id);

  do_follow(user_id);
  do_like(user_id);

  do_comment(user_id);

  get_followers_count(user_id);

  delete_old_likes(user_id);
  delete_old_comments(user_id);
  delete_old_user_filters(user_id);
  delete_old_error(user_id);

  collect_likes_from_tag(user_id);
  collect_likes_from_home(user_id);


}


function random_string(uzunluk) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < parseInt(uzunluk); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


setInterval(function () {


  chrome.tabs.query({ 'url': 'https://www.instagram.com/*' }, function (tabs) {


    if (tabs.length > 0) {

      chrome.tabs.query({ 'url': 'chrome-extension://' + chrome.runtime.id + '/*' }, function (tabs2) {
        if (tabs2.length > 0) {


          do_jobs();
        }

      });

    }


  });

  check_insta_tab();


}, 1000);


function my_cookie2(id_cook, key_cook, value_cook, donus_cook) {


  if (value_cook === undefined || value_cook === null) {
    deger_cook = localStorage.getItem(key_cook);
    if (deger_cook === undefined || deger_cook === null)
      return null;
    else
      return deger_cook;
  } else {

    localStorage.setItem(key_cook, value_cook);

    if (!db_index[id_cook]) {
      console.log('Unable to store in cookie', db_index, id_cook)
      return;
    }

    db_index[id_cook].transaction(["settings"], "readwrite").objectStore("settings").put({
      'key': key_cook,
      'value': value_cook
    }).onsuccess = function (e) {
      if (donus_cook) donus_cook(key_cook, id_cook);
    };


  }

}


function get_followers_count(user_id) {


  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id, 'last_follower_check_time'));


  if (gecen_zaman < 30 * 60 * 1000)
    return;


  $.ajax({
    url: "https://www.instagram.com/" + localStorage['username'] + "/?__a=1",
    method: "GET"
  }).done(function (data) {
    console.log('get_followers_count', data)
    update_follower_statistics(user_id, data.user.edge_followed_by.count);

  });

  my_cookie2(user_id, 'last_follower_check_time', Date.now());


}


var db_sql = [];
var db_sql_comments = [];
var db_sql_filters = [];

var db_index = [];


function set_defaults(user_id, donus) {


  key_arr = {
    "collect_from_followers": Date.now(),
    "collect_from_followers_error_interval": "300",
    "collect_from_followers_interval": "40",
    "collect_from_commenters": Date.now(),
    "collect_from_commenters_error_interval": "300",
    "collect_from_commenters_interval": "60",
    "collect_from_searches": Date.now(),
    "collect_from_searches_error_interval": "300",
    "collect_from_searches_interval": "60",
    "collect_from_locations": Date.now(),
    "collect_from_locations_error_interval": "300",
    "collect_from_locations_interval": "60",
    "collect_from_location_areas": Date.now(),
    "collect_from_location_areas_error_interval": "300",
    "collect_from_location_areas_interval": "60",
    "follow_error_interval": "600",
    "follow_interval": "51",
    "follow_interval_1": "60",
    "follow_interval_2": "65",
    "followers_statistics_time": Date.now(),
    "following_status": "true",
    "last_follow_time": Date.now(),
    "last_unfollow_time": Date.now(),
    "pool_collect_status": "true",
    "pool_limit": "1000",
    "unfollow_error_interval": "600",
    "unfollow_interval": "52",
    "unfollow_interval_1": "60",
    "unfollow_interval_2": "65",
    "unfollowing_status": "true",
    "son_takip_edilenler_zaman": Date.now(),
    "update_statistics_last_time": Date.now(),
    "follow_limit": "2000",
    "unfollow_limit": "2000",
    "days_unfollow": "1",
    "who_follow": "true",
    "just_unfollow_script_followings": "false",
    "auto_unfollow_days": "1",
    "auto_unfollow_enable": "false",
    "last_auto_unfollow_time": Date.now(),
    "unfollow_scanned_users": "0",
    "last_unfollow_scan_time": Date.now(),
    "last_white_list_scan_time": Date.now(),
    "unfollow_cursor": "end",
    "white_list_cursor": "end",
    "last_follower_check_time": Date.now(),
    "collect_from_likes_tag": Date.now(),
    "collect_from_likes_home": Date.now(),
    "home_like_status": "false",
    "tag_like_status": "false",
    "like_status": "false",
    "like_interval": "60",
    "like_error_interval": "300",
    "like_limit": "2000",
    "last_like_time": Date.now(),
    "last_like_delete_time": Date.now(),
    "last_user_filters_delete_time": Date.now(),
    "comments_status": "false",
    "comments_interval": "60",
    "comments_error_interval": "300",
    "comments_limit": "2000",
    "collect_from_comments_tag": Date.now(),
    "last_comments_time": Date.now(),
    "last_comments_delete_time": Date.now(),
    "last_error_delete_time": Date.now(),
    "last_hardratelimit": Date.now(),
    "white_list_users": "",
    "collect_white_list": "false",
    "collect_likes_white_list": "true",
    "collect_comments_white_list": "true",
    "collect_white_list_last_time": Date.now(),
    "filter_following_count_small": "",
    "filter_following_count_big": "",
    "filter_followers_count_small": "",
    "filter_followers_count_big": "",
    "filter_media_count_small": "",
    "filter_media_count_big": "",
    "private_public_filter": "both",
    "filter_external_link": "false",
    "filter_black_list": "",
    "gender_filter": "all",
    "lisans_kontrol": "0",
    "hangi_site": "null",
    "yardir_zaman": Date.now(),
    "diller": "",
    "versiyon": "1.0.5",
    "access_token": "",
    "access_token_status": "true",
    "access_control_time": Date.now(),
    "lock_status": "false",
    "monkey_access_token": "null",
    "register_time_new": Date.now()
  }


  var tt = 0;

  function tekrar_yap() {


    if (Object.keys(key_arr).length == tt) {
      if (donus)
        donus();


      return;
    }

    cikacak = Object.keys(key_arr)[tt];


    db_index[user_id].transaction(["settings"], "readwrite").objectStore("settings").get(IDBKeyRange.only(cikacak)).onsuccess = function (e) {

      if (e.target.result)
        my_cookie2(user_id, cikacak, e.target.result.value);
      else
        my_cookie2(user_id, cikacak, key_arr[cikacak]);

      tt++;


      tekrar_yap();


    };


  }


  tekrar_yap();


}


var old_index_db_version = "yok";


function update_to_v102(user_id) {


  //console.log(old_index_db_version);


  if (old_index_db_version == "yok")
    setTimeout(function () {
      update_to_v102(user_id);
    }, 2000);


  if (old_index_db_version == 5) {
    my_cookie2(user_id, 'collect_from_followers_error_interval', "300");
    my_cookie2(user_id, 'collect_from_commenters_error_interval', "300");
    my_cookie2(user_id, 'collect_from_searches_error_interval', "300");
    my_cookie2(user_id, 'collect_from_locations_error_interval', "300");
    my_cookie2(user_id, 'collect_from_location_areas_error_interval', "300");
    my_cookie2(user_id, 'follow_error_interval', "600");
    my_cookie2(user_id, 'unfollow_error_interval', "600");


  }

}

function connect_sql_db(user_id, donus) {


  db_sql_comments[user_id] = window.openDatabase('followermonkey_comments3_' + user_id, '', 'followermonkey Comments', null, function (db) {
  });


  db_sql_comments[user_id].transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS comments (user_id TEXT unique, media_id TEXT, slug TEXT, image TEXT, insert_time INTEGER, comments_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS comments_list (id INTEGER PRIMARY KEY   AUTOINCREMENT,comment TEXT unique,use_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS st_comments (gun INTEGER unique, sayi INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS sleep_times_comments (id INTEGER PRIMARY KEY   AUTOINCREMENT, start_time INTEGER, end_time INTEGER)');
  });


  db_sql_filters[user_id] = window.openDatabase('followermonkey_filters_' + user_id, '', 'followermonkey Filters', null, function (db) {
  });


  db_sql_filters[user_id].transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS users (user_id TEXT unique, username TEXT, insert_time INTEGER)');
  });


  db_sql[user_id] = window.openDatabase('followermonkey_' + user_id, '', 'followermonkey', null, function (db) {
  });


  db_sql[user_id].transaction(function (tx) {


    tx.executeSql('CREATE TABLE IF NOT EXISTS st_follow (gun INTEGER unique, sayi INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS st_unfollow (gun INTEGER unique, sayi INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS st_followers (gun INTEGER unique, sayi INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS st_likes (gun INTEGER unique, sayi INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS followers_jobs (user_id TEXT unique, screen_name TEXT, cursor TEXT, check_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS commenters_jobs (user_id TEXT unique, screen_name TEXT, check_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS searches_jobs (q TEXT unique, owner INTEGER, likes INTEGER, comments INTEGER, check_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS locations_jobs (q TEXT unique, owner INTEGER, likes INTEGER, comments INTEGER, name TEXT, check_time INTEGER)');

    tx.executeSql('CREATE TABLE IF NOT EXISTS likes_jobs (q TEXT unique, check_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS likes (user_id TEXT unique, media_id TEXT, slug TEXT, image TEXT, insert_time INTEGER, likes_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS error_log (action TEXT, item TEXT, error_type TEXT, error_time INTEGER, next_time INTEGER)');

    tx.executeSql('CREATE TABLE IF NOT EXISTS sleep_times_follow (id INTEGER PRIMARY KEY   AUTOINCREMENT, start_time INTEGER, end_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS sleep_times_unfollow (id INTEGER PRIMARY KEY   AUTOINCREMENT, start_time INTEGER, end_time INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS sleep_times_like (id INTEGER PRIMARY KEY   AUTOINCREMENT, start_time INTEGER, end_time INTEGER)');

    tx.executeSql('ALTER TABLE commenters_jobs ADD COLUMN comments INTEGER DEFAULT 1;');
    tx.executeSql('ALTER TABLE commenters_jobs ADD COLUMN likes INTEGER DEFAULT 1;');


    /*
         tx.executeSql('DROP TABLE searches_jobs');
        tx.executeSql('DROP TABLE locations_jobs');
        tx.executeSql('DROP TABLE location_areas_jobs');
      */
  });


//console.log(db_sql[user_id].version);

  /*
  if (db_sql[user_id].version!="1.0")
  {
    db_sql[user_id].changeVersion(db_sql[user_id].version, "1.0", function(t){
      console.log("versiyon değiştir")
  });
  }
  */


  var openRequest = indexedDB.open("followermonkey_" + user_id, 10);

  openRequest.onupgradeneeded = function (e) {
    var thisDB = e.target.result;
    var txn = e.target.transaction;
    //console.log("guncellendi");

    old_index_db_version = e.oldVersion;

//console.log(old_index_db_version);


    if (!thisDB.objectStoreNames.contains("follows")) {
      var objectStore_flw = thisDB.createObjectStore("follows", { autoIncrement: true });
    }
    else
      var objectStore_flw = txn.objectStore('follows');

    if (!thisDB.objectStoreNames.contains("follows_done")) {
      var objectStore_flw_done = thisDB.createObjectStore("follows_done", { autoIncrement: true });
    }
    else
      var objectStore_flw_done = txn.objectStore('follows_done');

    if (!thisDB.objectStoreNames.contains("unfollows")) {
      var objectStore_unfollows = thisDB.createObjectStore("unfollows", { autoIncrement: true });
    }
    else
      var objectStore_unfollows = txn.objectStore('unfollows');


    if (!thisDB.objectStoreNames.contains("unfollows_waiting")) {
      var objectStore_unfollows_waiting = thisDB.createObjectStore("unfollows_waiting", { autoIncrement: true });
    }
    else
      var objectStore_unfollows_waiting = txn.objectStore('unfollows_waiting');


    if (!thisDB.objectStoreNames.contains("settings")) {
      var objectStore = thisDB.createObjectStore("settings", { autoIncrement: true, keyPath: "key" });
    }
    else
      var objectStore = txn.objectStore('settings');

    if (!thisDB.objectStoreNames.contains("white_list2")) {
      var objectStore_white_list = thisDB.createObjectStore("white_list2", { autoIncrement: true, keyPath: "key" });
    }
    else
      var objectStore_white_list = txn.objectStore('white_list2');


    if (!objectStore_white_list.indexNames.contains("username"))
      objectStore_white_list.createIndex("username", "username", { unique: true });


    if (!objectStore_flw.indexNames.contains("user_id"))
      objectStore_flw.createIndex("user_id", "user_id", { unique: true });

    if (!objectStore_flw_done.indexNames.contains("user_id"))
      objectStore_flw_done.createIndex("user_id", "user_id", { unique: true });

    if (!objectStore_flw_done.indexNames.contains("follow_time"))
      objectStore_flw_done.createIndex("follow_time", "follow_time");

    if (!objectStore_flw_done.indexNames.contains("result,follow_time"))
      objectStore_flw_done.createIndex("result,follow_time", ["result", "follow_time"]);


    if (!objectStore_unfollows.indexNames.contains("user_id"))
      objectStore_unfollows.createIndex("user_id", "user_id", { unique: true });

    if (!objectStore_unfollows.indexNames.contains("unfollow_time"))
      objectStore_unfollows.createIndex("unfollow_time", "unfollow_time");

    if (!objectStore_unfollows.indexNames.contains("follow_time"))
      objectStore_unfollows.createIndex("follow_time", "follow_time");


    if (!objectStore_unfollows_waiting.indexNames.contains("follow_time"))
      objectStore_unfollows_waiting.createIndex("follow_time", "follow_time");


    if (!objectStore_unfollows_waiting.indexNames.contains("user_id"))
      objectStore_unfollows_waiting.createIndex("user_id", "user_id", { unique: true });


    if (!objectStore.indexNames.contains("key"))
      objectStore.createIndex("key", "key", { unique: true });


  }

  openRequest.onsuccess = function (e) {
    //console.log("running onsuccess");

    db_index[user_id] = e.target.result;

    set_defaults(user_id);

    update_to_v102(user_id);


    if (my_cookie2(user_id, "white_list_users").length > 5) {
      yeni_deger = my_cookie2(user_id, "white_list_users").split(",");

      for (i = 0; i < yeni_deger.length; i++) {

        db_index[user_id].transaction(["white_list2"], "readwrite").objectStore("white_list2").put({
          'username': yeni_deger[i],
          'nerden': 'follows'
        }).onsuccess = function (e) {
        };
      }

      //my_cookie2(user_id,"white_list_users","");

    }


  }


}


function language_filter(ekle, donus) {

  user_id = my_cookie2('genel', 'user_id');


  if (my_cookie2(user_id, "diller") != "") {
    diller_arr = my_cookie2(user_id, "diller").split(",");

    tespit_edilecek_yazi = "";
    if (ekle.hasOwnProperty("biography")) {
      if (ekle.biography != null)
        tespit_edilecek_yazi = ekle.biography;
    }


    $.each(ekle.media.nodes, function (index, value) {
      if (value.caption != undefined)
        tespit_edilecek_yazi = tespit_edilecek_yazi + " " + value.caption;

    });

    detectLanguage(tespit_edilecek_yazi, function (donen) {
      if (diller_arr.indexOf(donen) == -1) {
        donus(false);
        return;
      }
      else {

        donus(true);
        return;
      }

    })


  }

  else {
    donus(true);
    return;
  }


}


function user_filter(ekle, donus) {

//console.log(ekle)


  user_id = my_cookie2('genel', 'user_id');

  if (ekle.hasOwnProperty("id")) {
    if (ekle.id == user_id) {

      donus(false);
      return;
    }
  }


  if (ekle.hasOwnProperty("biography") && my_cookie2(user_id, "filter_black_list") != "") {

    if (ekle.biography != null) {


      yeni_deger = my_cookie2(user_id, "filter_black_list").toLowerCase().split(",");

      biography = ekle.biography.toLowerCase();

      var dondur = true;
      for (i = 0; i < yeni_deger.length; i++) {

        if (biography.indexOf(yeni_deger[i].trim()) > -1)
          dondur = false;


      }

      if (dondur == false) {
        //console.log("filter_black_list")
        donus(false);
        return;
      }


    }

  }


  if (ekle.hasOwnProperty("follows") && my_cookie2(user_id, "filter_following_count_big") != "") {
    if (ekle.follows.count > parseInt(my_cookie2(user_id, "filter_following_count_big"))) {
      //console.log("filter_following_count_big")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("followed_by") && my_cookie2(user_id, "filter_followers_count_big") != "") {
    if (ekle.followed_by.count > parseInt(my_cookie2(user_id, "filter_followers_count_big"))) {
      //console.log("filter_followers_count_big")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("media") && my_cookie2(user_id, "filter_media_count_big") != "") {
    if (ekle.media.count > parseInt(my_cookie2(user_id, "filter_media_count_big"))) {
      //console.log("filter_media_count_big")
      donus(false);
      return;
    }
  }


  if (ekle.hasOwnProperty("follows") && my_cookie2(user_id, "filter_following_count_small") != "") {
    if (ekle.follows.count < parseInt(my_cookie2(user_id, "filter_following_count_small"))) {
      //console.log("filter_following_count_small")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("followed_by") && my_cookie2(user_id, "filter_followers_count_small") != "") {
    if (ekle.followed_by.count < parseInt(my_cookie2(user_id, "filter_followers_count_small"))) {
      //console.log("filter_followers_count_small")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("media") && my_cookie2(user_id, "filter_media_count_small") != "") {
    if (ekle.media.count < parseInt(my_cookie2(user_id, "filter_media_count_small"))) {
      //console.log("filter_media_count_small")
      donus(false);
      return;
    }
  }


  if (ekle.hasOwnProperty("is_private")) {
    if (my_cookie2(user_id, "private_public_filter") != "both") {
      if (ekle.is_private == true && my_cookie2(user_id, "private_public_filter") == "public") {
        //console.log("public")
        donus(false);
        return;
      }

      if (ekle.is_private == false && my_cookie2(user_id, "private_public_filter") == "private") {
        //console.log("private")
        donus(false);
        return;
      }
    }

  }


  if (ekle.hasOwnProperty("blocked_by_viewer")) {
    if (ekle.blocked_by_viewer) {
      //console.log("blocked_by_viewer")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("follows_viewer")) {
    if (ekle.follows_viewer) {
      //console.log("follows_viewer")
      donus(false);
      return;
    }
  }
  if (ekle.hasOwnProperty("has_blocked_viewer")) {
    if (ekle.has_blocked_viewer) {
      //console.log("has_blocked_viewer")
      donus(false);
      return;
    }
  }
  if (ekle.hasOwnProperty("has_requested_viewer")) {
    if (ekle.has_requested_viewer) {
      //console.log("has_requested_viewer")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("followed_by_viewer")) {
    if (ekle.followed_by_viewer) {
      //console.log("followed_by_viewer")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("requested_by_viewer")) {
    if (ekle.requested_by_viewer) {
      //console.log("requested_by_viewer")
      donus(false);
      return;
    }
  }

  if (ekle.hasOwnProperty("profile_pic_url")) {
    if (ekle.profile_pic_url == "https://scontent-fra3-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg") {
      //console.log("profile_pic_url")
      donus(false);
      return;
    }
  }


  if (ekle.hasOwnProperty("external_url")) {
    if (ekle.external_url != null) {
      if (my_cookie2(user_id, "filter_external_link") == "true") {
        var yeni_donus = true;
        if (ekle.external_url.indexOf("facebook") > -1 || ekle.external_url.indexOf("twitter") > -1 || ekle.external_url.indexOf("snap") > -1)
          yeni_donus = true;
        else
          yeni_donus = false;

        if (yeni_donus == false) {
          donus(false);
          return;
        }

      }
    }

  }

  donus(true);


}


function insert_pool2(user, user_id) {


  user_filter(user, function (donus) {


    if (donus == true) {

//console.log(user);

      db_index[user_id].transaction(["follows_done"], "readonly").objectStore("follows_done").index("user_id").get(IDBKeyRange.only(user.id))
        .onsuccess = function (e) {

        if (!e.target.result) {
          db_index[user_id].transaction(["unfollows"], "readonly").objectStore("unfollows").index("user_id").get(IDBKeyRange.only(user.id))
            .onsuccess = function (e) {

            if (!e.target.result) {
              var person = { user_id: user.id, username: user.username }
              db_index[user_id].transaction(["follows"], "readwrite").objectStore("follows").add(person);

            }
          }
        }
      }
    }

    else {

      db_sql_filters[user_id].transaction(function (tz) {
        tz.executeSql('INSERT INTO users (user_id, username, insert_time)  VALUES ("' + user.id + '","' + user.username + '", ' + Date.now() + ');');
      });

    }


  });

}

/*

function insert_pool(message)
{




message.veri.followed_by.nodes.forEach(function(entry) {
            //console.log(entry);

            if (user_filter(entry))
            {


      db_index[message.user.viewer.id].transaction(["follows_done"],"readonly").objectStore("follows_done").index("user_id").get(IDBKeyRange.only(entry.id))
                .onsuccess = function(e) {

                      if (!e.target.result)
                      {
                        db_index[message.user.viewer.id].transaction(["unfollows"],"readonly").objectStore("unfollows").index("user_id").get(IDBKeyRange.only(entry.id))
                      .onsuccess = function(e) {

                            if (!e.target.result)
                            {
                              var person = {user_id:entry.id,username:entry.username}
                                    db_index[message.user.viewer.id].transaction(["follows"],"readwrite").objectStore("follows").add(person);

                            }
                        }
                      }
                  }

            }
            //my_cookie2(id,entry.key,entry.value);

        });




}

*/


function get_date_time(zaman) {
  zaman = typeof zaman !== 'undefined' ? zaman : Date.now();

  var d = new Date(zaman);
  var newDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
  my_time = new Date(newDate).getTime();
  return my_time;

}


function get_date_format(zaman) {
  zaman = typeof zaman !== 'undefined' ? zaman : Date.now();

  var d = new Date(zaman);
  var newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  return newDate;

}


function update_follow_statistics(user_id) {

  gun = get_date_time();

  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM st_follow where gun=' + gun, [], function (tx, results) {
      var len = results.rows.length,
        i;

      if (len == 0) {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('INSERT INTO st_follow (gun, sayi)  VALUES (' + gun + ', 1);');
        });
      } else {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('UPDATE st_follow SET sayi=' + (results.rows.item(0).sayi + 1) + ' WHERE gun=' + gun + ';');
        });
      }

    }, null);
  });


}


function update_follower_statistics(user_id, deger) {

  gun = get_date_time();

  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM st_followers where gun=' + gun, [], function (tx, results) {
      var len = results.rows.length,
        i;

      if (len == 0) {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('INSERT INTO st_followers (gun, sayi)  VALUES (' + gun + ', ' + deger + ');');
        });
      } else {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('UPDATE st_followers SET sayi=' + deger + ' WHERE gun=' + gun + ';');
        });
      }

    }, null);
  });


}


function update_unfollow_statistics(user_id) {

  gun = get_date_time();

  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM st_unfollow where gun=' + gun, [], function (tx, results) {
      var len = results.rows.length,
        i;

      if (len == 0) {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('INSERT INTO st_unfollow (gun, sayi)  VALUES (' + gun + ', 1);');
        });
      } else {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('UPDATE st_unfollow SET sayi=' + (results.rows.item(0).sayi + 1) + ' WHERE gun=' + gun + ';');
        });
      }

    }, null);
  });


}


function update_comments_statistics(user_id) {

  gun = get_date_time();

  db_sql_comments[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM st_comments where gun=' + gun, [], function (tx, results) {
      var len = results.rows.length,
        i;

      if (len == 0) {
        db_sql_comments[user_id].transaction(function (tz) {
          tz.executeSql('INSERT INTO st_comments (gun, sayi)  VALUES (' + gun + ', 1);');
        });
      } else {
        db_sql_comments[user_id].transaction(function (tz) {
          tz.executeSql('UPDATE st_comments SET sayi=' + (results.rows.item(0).sayi + 1) + ' WHERE gun=' + gun + ';');
        });
      }

    }, null);
  });


}


function update_likes_statistics(user_id) {

  gun = get_date_time();

  db_sql[user_id].transaction(function (tx) {
    tx.executeSql('SELECT * FROM st_likes where gun=' + gun, [], function (tx, results) {
      var len = results.rows.length,
        i;

      if (len == 0) {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('INSERT INTO st_likes (gun, sayi)  VALUES (' + gun + ', 1);');
        });
      } else {
        db_sql[user_id].transaction(function (tz) {
          tz.executeSql('UPDATE st_likes SET sayi=' + (results.rows.item(0).sayi + 1) + ' WHERE gun=' + gun + ';');
        });
      }

    }, null);
  });


}


function insert_unfolow_db(user, viewer, follow_time) {


  if (my_cookie2(viewer.id, "who_follow") == "true" && user.follows_viewer)
    return;


  var person = { "user_id": user.id, "username": user.username, "follow_time": follow_time }
  db_index[viewer.id].transaction(["unfollows_waiting"], "readwrite").objectStore("unfollows_waiting").add(person);


}


function insert_pendings(viewer) {


//console.log("pending geldi")

  db_index[viewer.id].transaction(["follows_done"], "readonly").objectStore("follows_done").index("result,follow_time").getAll(IDBKeyRange.bound(['requested', 1], ['requested', Date.now() - parseInt(my_cookie2(viewer.id, "days_unfollow")) * 24 * 60 * 60 * 1000]))
    .onsuccess = function (e) {
    //console.log(e.target)


    if (e.target.result) {


      $.each(e.target.result, function (key, value) {


        db_index[viewer.id].transaction(["white_list2"], "readwrite").objectStore("white_list2").index('username').openCursor(IDBKeyRange.only(value.username)).onsuccess = function (event) {
          var cursor = event.target.result;
          if (cursor) {
            dfdf = "";
          }
          else {
            value.id = value.user_id;
            insert_unfolow_db(value, viewer, value.follow_time);
          }


        }


      });


    }
  }


}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {


  if (message.option == "set_access_token") {

    user_id = my_cookie2('genel', 'user_id');
    my_cookie2(user_id, "access_token", message.access_token);
  }

  if (message.option == "follow_filter") {

    insert_pool2(message.user_follow, message.user.viewer.id)


  }


  if (message.option == "add_to_white_list")
    db_index[message.user.viewer.id].transaction(["white_list2"], "readwrite").objectStore("white_list2").put({
      'username': message.add_user.username,
      'nerden': 'comments_likes'
    });


  if (message.option == "save_likes") {


    message.veri.forEach(function (entry) {


      if (entry.node.viewer_has_liked == false) {
        db_sql[message.user.viewer.id].transaction(function (tz) {
          tz.executeSql('INSERT INTO likes (user_id, media_id, slug, image, insert_time, likes_time)  VALUES ("' + entry.node.owner.id + '", "' + entry.node.id + '", "' + entry.node.shortcode + '", "' + entry.node.display_url + '",  ' + Date.now() + ',0);');

        });

      }


    });
  }


  if (message.option == "collect_from_location") {


    get_from_medias(message.data, message.user.viewer.id, {
      'owner': message.owner,
      'comments': message.comments,
      'likes': message.likes
    }, {})


  }

  if (message.option == "unfollow_search") {


    if (my_cookie2(message.user.viewer.id, "unfollow_cursor") == "end")
      return;


    if (message.veri2.page_info.has_next_page)
      my_cookie2(message.user.viewer.id, "unfollow_cursor", message.veri2.page_info.end_cursor);
    else {
      my_cookie2(message.user.viewer.id, "unfollow_cursor", "end");
      insert_pendings(message.user.viewer);
    }


    my_cookie2(message.user.viewer.id, "unfollow_scanned_users", parseInt(my_cookie2(message.user.viewer.id, "unfollow_scanned_users")) + message.veri.length);


    $.each(message.veri, function (key, value) {
      if (!value) {
        console.log('Got empty value', message.veri, key, value)
        return
      }


      db_index[message.user.viewer.id].transaction(["white_list2"], "readwrite").objectStore("white_list2").index('username').openCursor(IDBKeyRange.only(value.username)).onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          dfdf = "";
        }
        else {
          db_index[message.user.viewer.id].transaction(["follows_done"], "readwrite").objectStore("follows_done").index('user_id').openCursor(IDBKeyRange.only(value.id)).onsuccess = function (event2) {
            var cursor = event2.target.result;
            if (cursor) {
              cursor.value.result = "following";
              cursor.update(cursor.value);

              if (cursor.value.follow_time < Date.now() - parseInt(my_cookie2(message.user.viewer.id, "days_unfollow")) * 24 * 60 * 60 * 1000)
                insert_unfolow_db(value, message.user.viewer, cursor.value.follow_time);


              //console.log(cursor.value);

            }
            else {
              if (my_cookie2(message.user.viewer.id, "just_unfollow_script_followings") == "false")
                insert_unfolow_db(value, message.user.viewer, "null");
            }


          };
        }


      }


    });


  }

  if (message.option == "white_list_search") {

    if (my_cookie2(message.user.viewer.id, "white_list_cursor") == "end")
      return;


    if (message.veri.page_info.has_next_page)
      my_cookie2(message.user.viewer.id, "white_list_cursor", message.veri.page_info.end_cursor);
    else {
      my_cookie2(message.user.viewer.id, "white_list_cursor", "end");

    }


    $.each(message.veri.edges, function (key, value) {
      icine_ekleme = db_index[message.user.viewer.id].transaction(["white_list2"], "readwrite").objectStore("white_list2").put({
        'username': value.node.username,
        'nerden': 'follows'
      });
    });


    chrome.tabs.query({ 'url': 'chrome-extension://' + chrome.runtime.id + '/*' }, function (tabs2) {

      tabs2.forEach(function (tab) {
        chrome.tabs.sendMessage(tab.id, { 'option': 'white_list_update' });
      });

    });


  }

  if (message.option == "do_like") {

//console.log(message)

    db_sql[message.user.viewer.id].transaction(function (tz) {
      if (message.durum == "ok") {
        tz.executeSql('UPDATE likes SET likes_time=' + Date.now() + ' WHERE media_id="' + message.media_id + '";');
        update_likes_statistics(message.user.viewer.id);
      }
      else {
        tz.executeSql('DELETE from likes WHERE media_id="' + message.media_id + '";');
        my_cookie2(user_id, 'last_like_time', Date.now() + parseInt(my_cookie2(user_id, 'like_error_interval')) * 1000);

        next_time = Date.now() + (parseInt(my_cookie2(user_id, 'like_error_interval')) + parseInt(my_cookie2(user_id, 'like_interval'))) * 1000;

        if (message.durum == "hata") {
          db_sql[user_id].transaction(function (tx) {
            tx.executeSql('INSERT INTO error_log (action, item, error_type, error_time, next_time)  VALUES ("like", "' + message.slug + '", "unknown", ' + Date.now() + ',  ' + next_time + ');');
          });

        }
      }


    });


  }


  if (message.option == "do_comment") {


    db_sql_comments[message.user.viewer.id].transaction(function (tz) {
      if (message.durum == "ok") {
        tz.executeSql('UPDATE comments SET comments_time=' + Date.now() + ' WHERE media_id="' + message.media_id + '";');
        update_comments_statistics(message.user.viewer.id);
      }
      else {
        tz.executeSql('DELETE from comments WHERE media_id="' + message.media_id + '";');
        my_cookie2(user_id, 'last_comments_time', Date.now() + parseInt(my_cookie2(user_id, 'comments_error_interval')) * 1000);
        next_time = Date.now() + (parseInt(my_cookie2(user_id, 'comments_error_interval')) + parseInt(my_cookie2(user_id, 'comments_interval'))) * 1000;

        if (message.durum == "hata") {
          db_sql[user_id].transaction(function (tx) {
            tx.executeSql('INSERT INTO error_log (action, item, error_type, error_time, next_time)  VALUES ("comment", "' + message.slug + '", "unknown", ' + Date.now() + ',  ' + next_time + ');');
          });

        }

      }


    });


  }


  if (message.option == "do_unfollow") {

//tx.executeSql('CREATE TABLE IF NOT EXISTS error_log (action TEXT, item TEXT, error_type TEXT, error_time INTEGER, next_time INTEGER)');

    if (message.veri == "ratelimit") {
      my_cookie2(user_id, 'last_unfollow_time', Date.now() + 3600 * 600);

      next_time = Date.now() + (parseInt(my_cookie2(user_id, 'unfollow_error_interval')) + parseInt(my_cookie2(user_id, 'unfollow_interval'))) * 1000;

      db_sql[user_id].transaction(function (tz) {
        tz.executeSql('INSERT INTO error_log (action, item, error_type, error_time, next_time)  VALUES ("unfollow", "' + message.who_unfollow.username + '", "rate limit", ' + Date.now() + ',  ' + next_time + ');');

      });

      return;
    }


    my_cookie2(user_id, 'last_unfollow_time', Date.now());

    db_index[message.user.viewer.id].transaction(["unfollows_waiting"], "readwrite").objectStore("unfollows_waiting").index('user_id').openCursor(IDBKeyRange.only(message.who_unfollow.user_id)).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {


        cursor.delete();

        if (message.veri == "hardratelimit") {
          my_cookie2(user_id, 'last_unfollow_time', Date.now() + parseInt(my_cookie2(user_id, 'unfollow_error_interval')) * 1000);

          next_time = Date.now() + (parseInt(my_cookie2(user_id, 'unfollow_error_interval')) + parseInt(my_cookie2(user_id, 'unfollow_interval'))) * 1000;


          db_sql[user_id].transaction(function (tz) {
            tz.executeSql('INSERT INTO error_log (action, item, error_type, error_time, next_time)  VALUES ("unfollow", "' + message.who_unfollow.username + '", " HARD rate limit", ' + Date.now() + ',  ' + next_time + ');');

          });

          return;
        }

        if (message.veri != "sil") {
          var person = {
            user_id: message.who_unfollow.user_id,
            username: message.who_unfollow.username,
            follow_time: message.who_unfollow.follow_time,
            unfollow_time: Date.now()
          }
          db_index[message.user.viewer.id].transaction(["unfollows"], "readwrite").objectStore("unfollows").add(person);


          update_unfollow_statistics(message.user.viewer.id);
        }

        db_index[message.user.viewer.id].transaction(["follows_done"], "readwrite").objectStore("follows_done").index('user_id').openCursor(IDBKeyRange.only(message.who_unfollow.user_id)).onsuccess = function (event) {
          var cursor = event.target.result;
          //console.log(cursor)
          if (cursor)
            cursor.delete();

        };


      }

    };


  }


  if (message.option == "do_follow") {


    if (message.veri == "ratelimit") {
      my_cookie2(user_id, 'last_follow_time', Date.now() + 600 * 1000);

      next_time = Date.now() + (parseInt(my_cookie2(user_id, 'follow_error_interval')) + parseInt(my_cookie2(user_id, 'follow_interval'))) * 1000;

      db_sql[user_id].transaction(function (tz) {
        tz.executeSql('INSERT INTO error_log (action, item, error_type, error_time, next_time)  VALUES ("follow", "' + message.who_follow.username + '", "rate limit", ' + Date.now() + ',  ' + next_time + ');');

      });

      return;
    }


    my_cookie2(user_id, 'last_follow_time', Date.now());

    db_index[message.user.viewer.id].transaction(["follows"], "readwrite").objectStore("follows").index('user_id').openCursor(IDBKeyRange.only(message.who_follow.user_id)).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {


        cursor.delete();
        if (message.veri == "hardratelimit") {


          last_hardratelimit = my_cookie2(user_id, 'last_hardratelimit');

          gecen_zaman_hardratelimit = Date.now() - last_hardratelimit
          if (gecen_zaman_hardratelimit < parseInt(my_cookie2(user_id, 'follow_interval')) * 1500) {
            my_cookie2(user_id, 'last_follow_time', Date.now() + parseInt(my_cookie2(user_id, 'follow_error_interval')) * 1000);
            next_time = Date.now() + (parseInt(my_cookie2(user_id, 'follow_error_interval')) + parseInt(my_cookie2(user_id, 'follow_interval'))) * 1000;


            db_sql[user_id].transaction(function (tz) {
              tz.executeSql('INSERT INTO error_log (action, item, error_type, error_time, next_time)  VALUES ("follow", "' + message.who_follow.username + '", " HARD rate limit", ' + Date.now() + ',  ' + next_time + ');');

            });
          }

          my_cookie2(user_id, 'last_hardratelimit', Date.now());


          return;
        }


        if (message.veri != "sil") {
          var person = {
            user_id: message.who_follow.user_id,
            username: message.who_follow.username,
            follow_time: Date.now(),
            "result": message.veri.result
          }
          db_index[message.user.viewer.id].transaction(["follows_done"], "readwrite").objectStore("follows_done").add(person);
          update_follow_statistics(message.user.viewer.id);
        }


      }

    };

  }


  if (message.option == "collect_followers") {
    if (message.veri != "hata") {
      my_cookie2(message.user.viewer.id, 'collect_from_followers', Date.now());
      //console.log(message);
      kullanicilar_followers = {};

      message.veri.edges.forEach(function (entry) {
        kullanicilar_followers[entry.node.id] = entry.node.username;
      });


      kullanicilar_var_mi(message.user.viewer.id, kullanicilar_followers, {});

      if (message.veri.page_info.has_next_page) {
        if (message.cursor != "son") {
          db_sql[message.user.viewer.id].transaction(function (tz) {
            tz.executeSql('UPDATE followers_jobs SET cursor="' + message.veri.page_info.end_cursor + '" WHERE user_id="' + message.user_id + '";');
          });
        }

      }
      else {
        db_sql[message.user.viewer.id].transaction(function (tz) {
          tz.executeSql('UPDATE followers_jobs SET cursor="son" WHERE user_id="' + message.user_id + '";');
        });
      }


      //insert_pool(message);
    }
    else
      my_cookie2(message.user.viewer.id, 'collect_from_followers', Date.now() + parseInt(my_cookie2(message.user.viewer.id, 'collect_from_followers_error_interval')) * 1000);

  }

  if (message.hasOwnProperty('user')) {
    if (!db_sql.hasOwnProperty(message.user.viewer.id))
      connect_sql_db(message.user.viewer.id);
  }
  else {
    deger = my_cookie2('genel', 'user_id');
    if (deger == null)
      return;

    if (!db_sql.hasOwnProperty(deger))
      connect_sql_db(deger);


  }


  if (message.option == "set_user") {

    deger = my_cookie2(message.user.viewer.id, 'user_id');

    if (deger != null) {

      if (deger != message.user.viewer.id)
        set_defaults(message.user.viewer.id);

    }


    localStorage['username'] = message.user.viewer.username;
    localStorage['user_id'] = message.user.viewer.id;

  }


  if (message.option == "add_likes_job") {

    yeni_mesaj = {
      'option': 'set_likes_button',
      'tag': message.tag
    };


    if (message.action == "add") {
      yeni_mesaj.varmi = true;
      db_sql[message.user.viewer.id].transaction(function (tz) {
        tz.executeSql('INSERT INTO likes_jobs (q, check_time)  VALUES ("' + message.tag + '",  ' + Date.now() + ');');

      });

    } else if (message.action == "remove") {
      yeni_mesaj.varmi = false;
      db_sql[message.user.viewer.id].transaction(function (tz) {
        tz.executeSql('DELETE from likes_jobs WHERE q="' + message.tag + '";');
      });
    }

    chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


  }


  if (message.option == "add_tag_job") {

    yeni_mesaj = {
      'option': 'set_tag_button',
      'tag': message.tag
    };


    if (message.action == "add") {
      yeni_mesaj.varmi = true;
      db_sql[message.user.viewer.id].transaction(function (tz) {
        tz.executeSql('INSERT INTO searches_jobs (q, owner, likes, comments, check_time)  VALUES ("' + message.tag + '", ' + message.owner + ', ' + message.likes + ', ' + message.comments + ',  ' + Date.now() + ');');

      });

    } else if (message.action == "remove") {
      yeni_mesaj.varmi = false;
      db_sql[message.user.viewer.id].transaction(function (tz) {
        tz.executeSql('DELETE from searches_jobs WHERE q="' + message.tag + '";');
      });
    }

    chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


  }


  if (message.option == "add_location_job") {

    //console.log(message)
    deger = my_cookie2('genel', 'user_id');


    yeni_mesaj = {
      'option': 'set_location_button'
    };


    if (message.action == "add") {
      yeni_mesaj.varmi = true;
      db_sql[deger].transaction(function (tz) {
        tz.executeSql('INSERT INTO locations_jobs (q, name, owner, likes, comments, check_time)  VALUES ("' + message.location_id + '", "' + encodeURIComponent(message.location_name) + '", ' + message.owner + ', ' + message.likes + ', ' + message.comments + ',  ' + Date.now() + ');');

      });

    } else if (message.action == "remove") {
      yeni_mesaj.varmi = false;
      db_sql[deger].transaction(function (tz) {
        tz.executeSql('DELETE from locations_jobs WHERE q="' + message.location + '";');
      });
    }

    chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


  }


  if (message.option == "add_user_job") {


    fenomen = JSON.parse(message.fenomen);


    yeni_mesaj = {
      'fenomen': message.fenomen
    };


    if (message.button == "commenters_btn_monkey") {
      yeni_mesaj.option = "set_commenters_button";
      table = "commenters_jobs";
    } else if (message.button == "followers_btn_monkey") {
      yeni_mesaj.option = "set_followers_button";
      table = "followers_jobs";

    }


    if (message.action == "add") {
      yeni_mesaj.varmi = true;
      db_sql[message.user.viewer.id].transaction(function (tz) {
        if (table == "followers_jobs")
          tz.executeSql('INSERT INTO ' + table + ' (user_id, screen_name, cursor, check_time)  VALUES ("' + fenomen.user_id + '", "' + fenomen.screen_name + '", "' + message.followers_tipi + '", ' + Date.now() + ');');
        else if (table == "commenters_jobs")
          tz.executeSql('INSERT INTO ' + table + ' (user_id, screen_name, check_time, comments, likes)  VALUES ("' + fenomen.user_id + '", "' + fenomen.screen_name + '",  ' + Date.now() + ', ' + message.comments + ', ' + message.likes + ');');

      });

    } else if (message.action == "remove") {
      yeni_mesaj.varmi = false;
      db_sql[message.user.viewer.id].transaction(function (tz) {
        tz.executeSql('DELETE from ' + table + ' WHERE user_id="' + fenomen.user_id + '";');
      });
    }

    chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


  }


  if (message.option == "get_tag_button") {


    // console.log(message)
    // console.log(db_sql[message.user.viewer.id])

    db_sql[message.user.viewer.id].transaction(function (tx) {
      tx.executeSql('SELECT * FROM searches_jobs where q="' + message.tag + '" limit 1', [], function (tx, results) {
        var len = results.rows.length;
        yeni_mesaj = {
          'option': 'set_tag_button',
          'tag': message.tag
        };

        if (len > 0)
          yeni_mesaj.varmi = true;
        else
          yeni_mesaj.varmi = false;

        //console.log(yeni_mesaj)

        chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


      }, null);

    });


  }


  if (message.option == "get_likes_button") {


    //console.log(message)
    // console.log(db_sql[message.user.viewer.id])

    db_sql[message.user.viewer.id].transaction(function (tx) {
      tx.executeSql('SELECT * FROM likes_jobs where q="' + message.tag + '" limit 1', [], function (tx, results) {
        var len = results.rows.length;
        yeni_mesaj = {
          'option': 'set_likes_button',
          'tag': message.tag
        };

        if (len > 0)
          yeni_mesaj.varmi = true;
        else
          yeni_mesaj.varmi = false;

        //console.log(yeni_mesaj)

        chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


      }, null);

    });


  }


  if (message.option == "get_comments_button") {


    yeni_mesaj = {
      'option': 'set_comments_button',
      'tag': message.tag,
      'varmi': false
    };


    chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


  }


  if (message.option == "get_location_button") {


//location_str=JSON.parse(message.location);
//console.log(message);
    deger = my_cookie2('genel', 'user_id');

    db_sql[deger].transaction(function (tx) {
      tx.executeSql('SELECT * FROM locations_jobs where q="' + message.location + '" limit 1', [], function (
        tx,
        results
      ) {
        var len = results.rows.length;
        yeni_mesaj = {
          'option': 'set_location_button',
          'location': message.location
        };

        if (len > 0)
          yeni_mesaj.varmi = true;
        else
          yeni_mesaj.varmi = false;

        chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


      }, null);

    });


  }


  if (message.option == "get_user_buttons") {
    fenomen = JSON.parse(message.fenomen);

    db_sql[message.user.viewer.id].transaction(function (tx) {
      tx.executeSql('SELECT * FROM followers_jobs where user_id="' + fenomen.user_id + '" limit 1', [], function (
        tx,
        results
      ) {
        var len = results.rows.length;
        yeni_mesaj = {
          'option': 'set_followers_button',
          'fenomen': message.fenomen
        };

        if (len > 0)
          yeni_mesaj.varmi = true;
        else
          yeni_mesaj.varmi = false;

        chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


      }, null);


      tx.executeSql('SELECT * FROM commenters_jobs where user_id="' + fenomen.user_id + '" limit 1', [], function (
        tx,
        results
      ) {
        var len = results.rows.length;
        yeni_mesaj = {
          'option': 'set_commenters_button',
          'fenomen': message.fenomen
        };

        if (len > 0)
          yeni_mesaj.varmi = true;
        else
          yeni_mesaj.varmi = false;

        chrome.tabs.sendMessage(sender.tab.id, yeni_mesaj);


      }, null);
    });

  }


});

//end21
