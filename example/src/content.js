function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}


if (document.URL.indexOf("www.instagram.com") > 0) {


  var ret = "yok"

  function retrieveWindowVariables(variables) {


    if (ret != "yok")
      return ret;

    //console.log(ret);
    scriptContent = "if (typeof " + variables + " !== 'undefined') localStorage.setItem('" + variables + "', JSON.stringify(" + variables + ")) \n"
    var script = document.createElement('script');
    script.id = 'tmpScript';
    script.appendChild(document.createTextNode(scriptContent));
    (document.body || document.head || document.documentElement).appendChild(script);

    ret = JSON.parse(localStorage.getItem(variables));
    localStorage.removeItem(variables);

    return ret;
  }


  if (document.URL.indexOf("instagram") > 0) {


    $("body").append('<div id="tag_modal_monkey" class="modal fade" tabindex="-1" role="dialog" >\
    <div class="modal-dialog">\
    <div class="modal-content">\
        <div class="modal-header">\
            <h3 class="lcl_options"></h3>\
            </div>\
        <div class="modal-body">\
        <label><input type="checkbox" id="owner_monkey" checked > <span class="lcl_collect_media_owners"></span></label><br>\
        <label><input type="checkbox" id="likes_monkey" checked > <span class="lcl_collect_who_likes_media"></span></label><br>\
        <label><input type="checkbox" id="comments_monkey" checked > <span class="lcl_collect_comments_on_media"></span></label>\
          </div>\
       <div class="modal-footer">\
             <button class="btn btn-danger lcl_cancel" data-dismiss="modal"></button>\
             <button id="save_tag_monkey" class="btn btn-primary lcl_save"></button>\
       </div>\
   </div>\
    </div>\
   </div>');

    $("body").append('<div id="location_modal_monkey" class="modal fade" tabindex="-1" role="dialog" >\
    <div class="modal-dialog">\
    <div class="modal-content">\
        <div class="modal-header">\
            <h3 class="lcl_options"></h3>\
            </div>\
        <div class="modal-body">\
        <label><input type="checkbox" id="owner_monkey_l" checked> <span class="lcl_collect_media_owners"></span></label><br>\
        <label><input type="checkbox" id="likes_monkey_l" checked> <span class="lcl_collect_who_likes_media"></span></label><br>\
        <label><input type="checkbox" id="comments_monkey_l" checked> <span class="lcl_collect_comments_on_media"></span></label><br><hr>\
        <label><input type="radio" disabled name="location_type" id="location_new" checked> <span>Check & Collect latest 12 new users</span></label><br>\
          <label><input type="radio" disabled name="location_type" id="location_all_monkey" > <span>Collect all users</span></label><br>Disabled functions available in pro version\
          </div>\
       <div class="modal-footer">\
             <button class="btn btn-danger lcl_cancel" data-dismiss="modal"></button>\
             <button id="save_location_monkey" class="btn btn-primary lcl_save"></button>\
       </div>\
   </div>\
    </div>\
   </div>');

    $("body").append('<div id="commenters_mondal_monkey" class="modal fade" tabindex="-1" role="dialog" >\
    <div class="modal-dialog">\
    <div class="modal-content">\
        <div class="modal-header">\
            <h3 class="lcl_options"></h3>\
            </div>\
        <div class="modal-body">\
        <label><input type="checkbox" id="likes_monkey_c" checked> <span class="lcl_collect_who_likes_media"></span></label><br>\
        <label><input type="checkbox" id="comments_monkey_c" checked> <span class="lcl_collect_comments_on_media"></span></label>\
          </div>\
       <div class="modal-footer">\
             <button class="btn btn-danger lcl_cancel" data-dismiss="modal"></button>\
             <button id="save_commnenters_monkey" class="btn btn-primary lcl_save"></button>\
       </div>\
   </div>\
    </div>\
   </div>');


    $("body").append('<div id="followers_modal_monkey" class="modal fade" tabindex="-1" role="dialog" >\
    <div class="modal-dialog">\
    <div class="modal-content">\
        <div class="modal-header">\
            <h3 class="lcl_options"></h3>\
            </div>\
        <div class="modal-body">\
        <label><input type="radio" name="followers_type" id="followers_all_monkey" checked> <span class="lcl_collect_followers_all"></span></label><br>\
        <label><input type="radio" name="followers_type" id="followers_new" > <span class="lcl_collect_followers_new"></span></label>\
          </div>\
       <div class="modal-footer">\
             <button class="btn btn-danger lcl_cancel" data-dismiss="modal"></button>\
             <button id="save_followers_type_monkey" class="btn btn-primary lcl_save"></button>\
       </div>\
   </div>\
    </div>\
   </div>');


    $("body").append('<div id="user_buttons_monkey" style="display:none; position: fixed;bottom: 20px;left: 20px;">FollowerMonkey\
<button class="btn btn-success" data-user="" id="commenters_btn_monkey"></button> \
<button class="btn btn-success" data-user="" id="followers_btn_monkey"></button> \
</div>');

    $("body").append('<button style="display:none; position: fixed;bottom: 20px;left: 20px;" class="btn btn-success" data-tag="" id="tag_button_monkey"></button>');
    $("body").append('<button style="display:none; position: fixed;bottom: 60px;left: 20px;" class="btn btn-primary" data-tag="" id="like_button_monkey"></button>');
    $("body").append('<button style="display:none; position: fixed;bottom: 100px;left: 20px;" class="btn btn-primary" data-tag="" id="comments_button_monkey"></button>');

    $("body").append('<button data-action="add" style="display:none; position: fixed;bottom: 20px;left: 20px;" data-location="" class="btn btn-success" id="location_button_monkey"></button>');

    $(".lcl_options").html(chrome.i18n.getMessage("lcl_options"))
    $(".lcl_collect_media_owners").html(chrome.i18n.getMessage("lcl_collect_media_owners"))
    $(".lcl_collect_who_likes_media").html(chrome.i18n.getMessage("lcl_collect_who_likes_media"))
    $(".lcl_collect_comments_on_media").html(chrome.i18n.getMessage("lcl_collect_comments_on_media"))
    $(".lcl_cancel").html(chrome.i18n.getMessage("lcl_cancel"))
    $(".lcl_save").html(chrome.i18n.getMessage("lcl_save"))
    $(".lcl_collect_followers_new").html(chrome.i18n.getMessage("lcl_collect_followers_new"))
    $(".lcl_collect_followers_all").html(chrome.i18n.getMessage("lcl_collect_followers_all"))

  }

  function save_tag() {

    owner_data = 0;
    likes_data = 0;
    comments_data = 0;

    if ($('#owner_monkey').is(":checked") == false && $('#likes_monkey').is(":checked") == false && $('#comments_monkey').is(":checked") == false) {
      alert("Please select at least one");
      return;
    }


    if ($('#owner_monkey').is(":checked"))
      owner_data = 1;


    if ($('#likes_monkey').is(":checked"))
      likes_data = 1;

    if ($('#comments_monkey').is(":checked"))
      comments_data = 1;


    message = {
      'option': 'add_tag_job',
      'button': $("#tag_button_monkey").attr('id'),
      'tag': $("#tag_button_monkey").attr('data-tag'),
      'action': $("#tag_button_monkey").attr('data-action'),
      "owner": owner_data,
      "likes": likes_data,
      "comments": comments_data,
      'user': user
    };
    chrome.runtime.sendMessage(message);


    //chrome.runtime.sendMessage({"option":"add_location_job","action":"add","location":data.data,"owner":owner_data,"likes":likes_data,"comments":comments_data});


    $("#tag_modal_monkey").modal("hide");

  }


  function save_location() {

    owner_data = 0;
    likes_data = 0;
    comments_data = 0;

    if ($('#owner_monkey_l').is(":checked") == false && $('#likes_monkey_l').is(":checked") == false && $('#comments_monkey_l').is(":checked") == false) {
      alert("Please select at least one");
      return;
    }


    if ($('#owner_monkey_l').is(":checked"))
      owner_data = 1;


    if ($('#likes_monkey_l').is(":checked"))
      likes_data = 1;

    if ($('#comments_monkey_l').is(":checked"))
      comments_data = 1;

    page_info = retrieveWindowVariables(["window._sharedData"]);


    message = {
      'option': 'add_location_job',
      'button': $("#location_button_monkey").attr('id'),
      'location_id': $("#location_button_monkey").attr('data-location'),
      'location_name': page_info.entry_data.LocationsPage[0].location.name,
      'action': $("#location_button_monkey").attr('data-action'),
      "owner": owner_data,
      "likes": likes_data,
      "comments": comments_data,
      'user': user
    };
    chrome.runtime.sendMessage(message);


    //chrome.runtime.sendMessage({"option":"add_location_job","action":"add","location":data.data,"owner":owner_data,"likes":likes_data,"comments":comments_data});


    $("#location_modal_monkey").modal("hide");

  }


  function save_commenters() {

    likes_data = 0;
    comments_data = 0;

    if ($('#likes_monkey_c').is(":checked") == false && $('#comments_monkey_c').is(":checked") == false) {
      alert("Please select at least one");
      return;
    }


    if ($('#likes_monkey_c').is(":checked"))
      likes_data = 1;

    if ($('#comments_monkey_c').is(":checked"))
      comments_data = 1;

    page_info = retrieveWindowVariables(["window._sharedData"]);

    message = {
      'option': 'add_user_job',
      'button': $("#commenters_btn_monkey").attr('id'),
      'fenomen': $("#commenters_btn_monkey").attr('data-user'),
      'action': $("#commenters_btn_monkey").attr('data-action'),
      'user': user,
      "likes": likes_data,
      "comments": comments_data
    };

//message={'option':'add_user_job','button':$( "#commenters_btn_monkey" ).attr('id'),'location_id':$( "#location_button_monkey" ).attr('data-location'),'location_name':page_info.entry_data.LocationsPage[0].location.name,'action':$( "#location_button_monkey" ).attr('data-action'),"owner":owner_data,"likes":likes_data,"comments":comments_data,'user':user};
    chrome.runtime.sendMessage(message);


    $("#commenters_mondal_monkey").modal("hide");

  }


  function save_followers_type_monkey() {


    if ($('#followers_all_monkey').is(":checked"))
      followers_tipi = "ilk";
    else
      followers_tipi = "son";


    page_info = retrieveWindowVariables(["window._sharedData"]);

    message = {
      'option': 'add_user_job',
      'button': $("#followers_btn_monkey").attr('id'),
      'fenomen': $("#followers_btn_monkey").attr('data-user'),
      'action': $("#followers_btn_monkey").attr('data-action'),
      'user': user,
      "followers_tipi": followers_tipi
    };

    chrome.runtime.sendMessage(message);


    $("#followers_modal_monkey").modal("hide");

  }


  $("#like_button_monkey").click(function () {
    message = {
      'option': 'add_likes_job',
      'button': $("#like_button_monkey").attr('id'),
      'tag': $("#like_button_monkey").attr('data-tag'),
      'action': $("#like_button_monkey").attr('data-action'),
      'user': user
    };
    chrome.runtime.sendMessage(message);

  });

  $("#comments_button_monkey").click(function () {

    alert("Available in PRO version. Please visit followermonkey.com to download PRO")


  });


  $("#save_tag_monkey").click(function () {

    save_tag()

  });

  $("#save_location_monkey").click(function () {

    save_location()

  });

  $("#save_commnenters_monkey").click(function () {

    save_commenters()

  });


  $("#save_followers_type_monkey").click(function () {

    save_followers_type_monkey()

  });


  function durum_sec(kim) {

    if (kim.attr("data-action") == "add") {
      $("#tag_modal_monkey").modal();
      return;
    }


    message = {
      'option': 'add_tag_job',
      'button': kim.attr('id'),
      'tag': kim.attr('data-tag'),
      'action': kim.attr('data-action'),
      'user': user
    };
    chrome.runtime.sendMessage(message);


  }


  function durum_sec2(kim) {

    if (kim.attr("data-action") == "add") {
      $("#location_modal_monkey").modal();
      return;
    }


    message = {
      'option': 'add_location_job',
      'button': kim.attr('id'),
      'location': kim.attr('data-location'),
      'action': kim.attr('data-action'),
      'user': user
    };
    chrome.runtime.sendMessage(message);


  }


  function durum_sec3(kim) {

    if (kim.attr("data-action") == "add") {
      $("#commenters_mondal_monkey").modal();
      return;
    }


    message = {
      'option': 'add_user_job',
      'button': kim.attr('id'),
      'fenomen': kim.attr('data-user'),
      'action': kim.attr('data-action'),
      'user': user
    };
    chrome.runtime.sendMessage(message);

  }


  function durum_sec4(kim) {


    if (kim.attr("data-action") == "add") {
      $("#followers_modal_monkey").modal();
      return false;
    }


    message = {
      'option': 'add_user_job',
      'button': kim.attr('id'),
      'fenomen': kim.attr('data-user'),
      'action': kim.attr('data-action'),
      'user': user
    };
    chrome.runtime.sendMessage(message);

  }


  $("#followers_btn_monkey").click(function () {

    durum_sec4($(this));

  });

  /*
  $( "#commenters_btn_monkey" ).click(function() {
    message={'option':'add_user_job','button':$(this).attr('id'),'fenomen':$(this).attr('data-user'),'action':$(this).attr('data-action'),'user':user};
    chrome.runtime.sendMessage(message);
    });
  */
  $("#commenters_btn_monkey").click(function () {

    durum_sec3($(this));

  });

  $("#location_button_monkey").click(function () {

    durum_sec2($(this));

  });


  $("#tag_button_monkey").click(function () {

    durum_sec($(this));

  });


  /*
  $( "#tag_button_monkey" ).click(function() {
    message={'option':'add_tag_job','button':$(this).attr('id'),'tag':$(this).attr('data-tag'),'action':$(this).attr('data-action'),'user':user};
    chrome.runtime.sendMessage(message);
    });
  */


  var user;


  login_mi = retrieveWindowVariables(["window._sharedData"]);
//console.log(login_mi);


  if (login_mi.config.viewer != null) {
    user = login_mi.config;
    chrome.runtime.sendMessage({ 'option': 'set_user', 'user': login_mi.config });
  }


  function check_location_page() {


    if (document.URL.indexOf('/explore/locations/') == -1) {
      $('#location_button_monkey').hide('slow');
      return;
    }

    page_info = retrieveWindowVariables(["window._sharedData"]);


    if (!page_info.entry_data.hasOwnProperty('LocationsPage')) {
      window.location = window.location;
      return;
    }


    arr1 = document.URL.split("/explore/locations/");


//console.log(page_info.entry_data.LocationsPage[0]);

    arr2 = arr1[1].split("/");


    var url_location = arr2[0];


    if (page_info.entry_data.LocationsPage[0].location.id != url_location) {
      window.location = window.location;
      return;
    }


    if ($('#location_button_monkey').attr('data-location') != url_location) {
      chrome.runtime.sendMessage({ "option": "get_location_button", "user": user, "location": url_location });
    }
    else if ($('#location_button_monkey').is(":visible") == false)
      $('#location_button_monkey').show('slow');


  }


  function check_tag_page() {


    if (document.URL.indexOf('/explore/tags/') == -1) {
      $('#tag_button_monkey').hide('slow');
      $('#like_button_monkey').hide('slow');
      $('#comments_button_monkey').hide('slow');
      return;
    }

    page_info = retrieveWindowVariables(["window._sharedData"]);


    if (!page_info.entry_data.hasOwnProperty('TagPage')) {
      window.location = window.location;
      return;
    }


    arr1 = document.URL.split("/explore/tags/");


    arr2 = arr1[1].split("/");


    var url_tag = arr2[0];


    var url_tag_decoded = decodeURIComponent(url_tag);


    if (page_info.entry_data.TagPage[0].graphql.hashtag.name != url_tag_decoded) {
      window.location = window.location;
      return;
    }


    if ($('#tag_button_monkey').attr('data-tag') != url_tag) {
      chrome.runtime.sendMessage({ "option": "get_tag_button", "user": user, "tag": url_tag });
    }
    else if ($('#tag_button_monkey').is(":visible") == false)
      $('#tag_button_monkey').show('slow');


    if ($('#like_button_monkey').attr('data-tag') != url_tag) {
      chrome.runtime.sendMessage({ "option": "get_likes_button", "user": user, "tag": url_tag });
    }
    else if ($('#like_button_monkey').is(":visible") == false)
      $('#like_button_monkey').show('slow');


    if ($('#comments_button_monkey').attr('data-tag') != url_tag) {
      chrome.runtime.sendMessage({ "option": "get_comments_button", "user": user, "tag": url_tag });
    }
    else if ($('#comments_button_monkey').is(":visible") == false)
      $('#comments_button_monkey').show('slow');


  }


  function check_profil_page() {


    profil = $('a[href$="/followers/"]');

    if (profil.length == 0) {
      $('#user_buttons_monkey').hide('slow');
      return;
    }


    page_info = retrieveWindowVariables(["window._sharedData"]);


    if (!page_info.entry_data.hasOwnProperty('ProfilePage')) {
      window.location = window.location;
      return;
    }

    fenomen_screen_name = profil.attr('href').split("/")[1];

    console.log(page_info.entry_data.ProfilePage)

    if (page_info.entry_data.ProfilePage[0].graphql.user.username != fenomen_screen_name) {
      window.location = window.location;
      return;
    }

    fenomen = '{"screen_name":"' + fenomen_screen_name + '","user_id":"' + page_info.entry_data.ProfilePage[0].graphql.user.id + '"}';


    if ($('#commenters_btn_monkey').attr('data-user') != fenomen) {
      chrome.runtime.sendMessage({ "option": "get_user_buttons", "user": user, "fenomen": fenomen });
    }
    else if ($('#user_buttons_monkey').is(":visible") == false)
      $('#user_buttons_monkey').show('slow');


  }


  function do_jobs() {

    page_info = retrieveWindowVariables(["window._sharedData"]);


    if (page_info.config.viewer == null)
      return;

    user = page_info.config;


    check_profil_page();

    check_tag_page();

    check_location_page();


  }


  function get_from_medias(medias, user_id, kimler) {


//console.log(medias);
    var message = { 'option': 'add_to_white_list' };

    if (medias.length == 0)
      return;

    $.ajax({
      //url: "https://api.instagram.com/v1/users/"+results.rows.item(0).user_id+"/media/recent?client_id=5d894035c6d04bc3978dd036108c712&_="+Date.now(),
      url: "https://www.instagram.com/p/" + medias[0].code + "/?__a=1",
      method: "GET"
    }).done(function (data) {


      if (kimler.comments == 1) {
        data.graphql.shortcode_media.edge_media_to_comment.edges.forEach(function (entry) {

          message.add_user = entry.node.owner
          message.user = user;
          chrome.runtime.sendMessage(message);

        });
      }
      if (kimler.likes == 1) {
        data.graphql.shortcode_media.edge_media_preview_like.edges.forEach(function (entry) {
          message.add_user = entry.node
          message.user = user;
          //console.log(message);
          chrome.runtime.sendMessage(message);

        });
      }


      medias.shift();
      get_from_medias(medias, user_id, kimler);

    });


  }


  function look_up_user(users) {


    if (Object.keys(users).length == 0)
      return false;

    id = Object.keys(users)[0];
    username = users[id];

    delete users[id];

    $.ajax({
      url: "https://www.instagram.com/" + username + "/?__a=1",
      method: "GET"
    }).done(function (data) {


      setTimeout(function () {
        var message = {};
        message.user_follow = data.user;
        message.user = user;
        message.option = "follow_filter";
        chrome.runtime.sendMessage(message);
        look_up_user(users);
      }, 3000);


    }).fail(function (xhr, textStatus, errorThrown) {


      setTimeout(function () {
        look_up_user(users);

      }, 3000);

    });


  }


  function unfollow_denetle(users, messagex, new_users) {


    if (users.length == 0) {

      messagex.veri = new_users;
      chrome.runtime.sendMessage(messagex);
      return;
    }


    $.ajax({
      //url: "https://api.instagram.com/v1/users/"+results.rows.item(0).user_id+"/media/recent?client_id=5d894035c6d04bc3978dd036108c712&_="+Date.now(),
      url: "https://www.instagram.com/" + users[0].node.username + "/?__a=1",
      method: "GET"
    }).done(function (data) {


      new_users.push(data.user);
      users.shift();
      setTimeout(function () {
        unfollow_denetle(users, messagex, new_users);
      }, 3000);


    }).fail(function (xhr, textStatus, errorThrown) {
      //console.log("white list toplama hatasi")

      users.shift();
      setTimeout(function () {
        unfollow_denetle(users, messagex, new_users);
      }, 3000);


    });

  }


  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {


    if (message.option == "follow_filter") {

      look_up_user(message.users);
    }


    if (message.option == "collect_white_list") {


      $.ajax({
        //url: "https://api.instagram.com/v1/users/"+results.rows.item(0).user_id+"/media/recent?client_id=5d894035c6d04bc3978dd036108c712&_="+Date.now(),
        url: "https://www.instagram.com/" + user.viewer.username + "/?__a=1",
        method: "GET"
      }).done(function (data) {


        var comments = 0;
        var likes = 0;

        if (message.collect_comments_white_list == "true")
          comments = 1;

        if (message.collect_likes_white_list == "true")
          likes = 1;


        kimler = { 'comments': comments, 'likes': likes }

        get_from_medias(data.user.media.nodes, user.viewer.id, kimler)


      }).fail(function (xhr, textStatus, errorThrown) {
        console.log(xhr)

      });


    }

    if (message.option == "collect_from_location") {
      $.ajax({
        url: "https://www.instagram.com/explore/locations/" + message.location + "/",
        method: "GET"
      }).done(function (data) {


        arr_1 = data.split("window._sharedData = {");

        arr_2 = arr_1[1].split("};")

        json_s = "{" + arr_2[0] + "}";

        json_s = JSON.parse(json_s);


        message.data = json_s.entry_data.LocationsPage[0].location.media.nodes;
        message.user = user;

        chrome.runtime.sendMessage(message);

      });

    }


    if (message.option == "unfollow_search") {


      if (message.cursor == "bos")
        bakim = "https://www.instagram.com/graphql/query/?query_id=17874545323001329&id=" + user.viewer.id + "&first=20";
      else
        bakim = "https://www.instagram.com/graphql/query/?query_id=17874545323001329&id=" + user.viewer.id + "&first=10&after=" + message.cursor;


      $.ajax({
        url: bakim,
        method: "GET",

      }).done(function (data) {


        message.veri2 = data.data.user.edge_follow;
        message.user = user;
        user_liste = data.data.user.edge_follow.edges;
        unfollow_denetle(user_liste, message, []);

        //chrome.runtime.sendMessage(message);

      });

    }


    if (message.option == "white_list_search") {


      if (message.cursor == "bos")
        bakim2 = "https://www.instagram.com/graphql/query/?query_id=17874545323001329&id=" + user.viewer.id + "&first=20";
      else
        bakim2 = "https://www.instagram.com/graphql/query/?query_id=17874545323001329&id=" + user.viewer.id + "&first=10&after=" + message.cursor;


      $.ajax({
        url: bakim2,
        method: "GET",
      }).done(function (data) {


        message.veri = data.data.user.edge_follow;
        message.user = user;
        chrome.runtime.sendMessage(message);

      });

    }


    if (message.option == "do_follow") {
//console.log(message)

      takip_et = message.who_follow.user_id;
//console.log(takip_et);


      $.ajax({
        url: "https://www.instagram.com/web/friendships/" + takip_et + "/follow/",
        method: "POST",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('x-csrftoken', user.csrf_token);
          xhr.setRequestHeader('x-instagram-ajax', '1');
        }

      }).done(function (data) {
        message.veri = data;
        message.user = user;
        chrome.runtime.sendMessage(message);

      }).fail(function (xhr, textStatus, errorThrown) {

        if (xhr.status == 400) {
          if (xhr.responseText == "")
            message.veri = "sil";
          else
            message.veri = "hardratelimit";


          message.user = user;
          chrome.runtime.sendMessage(message);
        }

        if (xhr.status == 403 || xhr.status == 429) {
          message.veri = "ratelimit";
          message.user = user;
          chrome.runtime.sendMessage(message);
        }

        //console.log(xhr)

      });

    }


    if (message.option == "do_unfollow") {
//console.log(message)

      takip_birak = message.who_unfollow.user_id;
//console.log(takip_birak);


      $.ajax({
        url: "https://www.instagram.com/web/friendships/" + takip_birak + "/unfollow/",
        method: "POST",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('x-csrftoken', user.csrf_token);
          xhr.setRequestHeader('x-instagram-ajax', '1');
        }

      }).done(function (data) {
        message.veri = data;
        message.user = user;
        chrome.runtime.sendMessage(message);

      }).fail(function (xhr, textStatus, errorThrown) {

        if (xhr.status == 400) {
          if (xhr.responseText == "")
            message.veri = "sil";
          else {
            if (xhr.hasOwnProperty('responseJSON')) {

              $.ajax({
                url: "https://www.instagram.com/" + message.who_unfollow.username,
                method: "GET"
              }).done(function (data) {

                message.veri = "hardratelimit";

              }).fail(function (xhr, textStatus, errorThrown) {

                message.veri = "sil";


              });


            }
            else
              message.veri = "hardratelimit";


          }
          message.user = user;
          chrome.runtime.sendMessage(message);
        }

        if (xhr.status == 403 || xhr.status == 429) {
          message.veri = "ratelimit";
          message.user = user;
          chrome.runtime.sendMessage(message);
        }

        // console.log(xhr.responseJSON)

      });

    }


    if (message.option == "do_like") {
      //console.log(message);

      $.ajax({
        url: "https://www.instagram.com/web/likes/" + message.media_id + "/like/",
        method: "POST",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('x-csrftoken', user.csrf_token);
          xhr.setRequestHeader('x-instagram-ajax', '1');
        }
      }).done(function (data) {

        //console.log(data)
        message.durum = "ok";
        message.user = user;
        chrome.runtime.sendMessage(message);

      }).fail(function (xhr, textStatus, errorThrown) {


        $.ajax({
          url: "https://www.instagram.com/p/" + message.slug,
          method: "GET",
        }).done(function (data) {
          message.durum = "hata";
          message.user = user;
          chrome.runtime.sendMessage(message);
        }).fail(function (xhr, textStatus, errorThrown) {

          message.durum = "hata_sil";
          message.user = user;
          chrome.runtime.sendMessage(message);

        });
      });


    }


    if (message.option == "do_comment") {


      datasi = { "comment_text": message.comment };


      $.ajax({
        url: "https://www.instagram.com/web/comments/" + message.media_id + "/add/",
        method: "POST",
        data: datasi,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('x-csrftoken', user.csrf_token);
          xhr.setRequestHeader('x-instagram-ajax', '1');
        }
      }).done(function (data) {

        //console.log(data)
        message.durum = "ok";
        message.user = user;
        chrome.runtime.sendMessage(message);

      }).fail(function (xhr, textStatus, errorThrown) {


        $.ajax({
          url: "https://www.instagram.com/p/" + message.slug,
          method: "GET",
        }).done(function (data) {
          message.durum = "hata";
          message.user = user;
          chrome.runtime.sendMessage(message);
        }).fail(function (xhr, textStatus, errorThrown) {

          message.durum = "hata_sil";
          message.user = user;
          chrome.runtime.sendMessage(message);

        });


      });

    }


    if (message.option == "collect_likes_from_home") {


//console.log("collect_likes_from_home 1")

      $.ajax({
        url: "https://www.instagram.com/?__a=1",
        method: "GET"
      }).done(function (data) {

//console.log(data)

        message.option = "save_likes";
        message.veri = data.graphql.user.edge_web_feed_timeline.edges//data.feed.media.nodes;
        message.user = user;
        chrome.runtime.sendMessage(message);

      }).fail(function (xhr, textStatus, errorThrown) {

//console.log(xhr)


      });


    }

    if (message.option == "collect_followers") {

      if (message.cursor == "ilk" || message.cursor == "son")
        istekler = "https://www.instagram.com/graphql/query/?query_id=17851374694183129&id=" + message.user_id + "&first=20"
      else
        istekler = "https://www.instagram.com/graphql/query/?query_id=17851374694183129&id=" + message.user_id + "&first=10&after=" + message.cursor;

//istekler=decodeURIComponent(istekler);

      //datasi={"q":istekler,"ref":"relationships::follow_list"};


      $.ajax({
        url: istekler,
        method: "GET"
      }).done(function (data) {


        message.veri = data.data.user.edge_followed_by;
        message.user = user;
        //chrome.runtime.sendMessage({"option":"get_user_buttons","user":user,"fenomen":fenomen});

        chrome.runtime.sendMessage(message);

      }).fail(function (xhr, textStatus, errorThrown) {

        message.veri = "hata";
        message.user = user;
        chrome.runtime.sendMessage(message);

      });

    }


    if (message.option == "set_location_button") {
//console.log(message)


      $('#location_button_monkey').attr('data-location', message.location);


      if (message.varmi) {

        $('#location_button_monkey').attr('data-action', "remove");
        $('#location_button_monkey').html(chrome.i18n.getMessage("lcl_remove_location_job"));
        $('#location_button_monkey').addClass('btn-danger')
        $('#location_button_monkey').removeClass('btn-success')
      }
      else {
        $('#location_button_monkey').attr('data-action', "add");
        $('#location_button_monkey').html(chrome.i18n.getMessage("lcl_collect_from_location"));
        $('#location_button_monkey').addClass('btn-success')
        $('#location_button_monkey').removeClass('btn-danger')
      }

      if ($('#location_button_monkey').is(":visible") == false)
        $('#location_button_monkey').show('slow');


    }


    if (message.option == "set_tag_button") {


      $('#tag_button_monkey').attr('data-tag', message.tag);

      if (message.varmi) {
        $('#tag_button_monkey').attr('data-action', "remove");
        $('#tag_button_monkey').html(chrome.i18n.getMessage("lcl_remove_tag_job"));
        $('#tag_button_monkey').addClass('btn-danger')
        $('#tag_button_monkey').removeClass('btn-success')


      }
      else {
        $('#tag_button_monkey').attr('data-action', "add");
        $('#tag_button_monkey').html(chrome.i18n.getMessage("lcl_collect_from_tag"));
        $('#tag_button_monkey').removeClass('btn-danger')
        $('#tag_button_monkey').addClass('btn-success')


      }
      if ($('#tag_button_monkey').is(":visible") == false)
        $('#tag_button_monkey').show('slow');

    }


    if (message.option == "set_comments_button") {


      $('#comments_button_monkey').attr('data-tag', message.tag);

      if (message.varmi) {
        $('#comments_button_monkey').attr('data-action', "remove");
        $('#comments_button_monkey').html(chrome.i18n.getMessage("lcl_remove_comments_media_job"));
        $('#comments_button_monkey').addClass('btn-danger')
        $('#comments_button_monkey').removeClass('btn-primary')


      }
      else {
        $('#comments_button_monkey').attr('data-action', "add");
        $('#comments_button_monkey').html(chrome.i18n.getMessage("lcl_comments_medias_job"));
        $('#comments_button_monkey').removeClass('btn-danger')
        $('#comments_button_monkey').addClass('btn-primary')


      }
      if ($('#comments_button_monkey').is(":visible") == false)
        $('#comments_button_monkey').show('slow');

    }

    if (message.option == "set_likes_button") {


      $('#like_button_monkey').attr('data-tag', message.tag);

      if (message.varmi) {
        $('#like_button_monkey').attr('data-action', "remove");
        $('#like_button_monkey').html(chrome.i18n.getMessage("lcl_remove_like_media_job"));
        $('#like_button_monkey').addClass('btn-danger')
        $('#like_button_monkey').removeClass('btn-primary')


      }
      else {
        $('#like_button_monkey').attr('data-action', "add");
        $('#like_button_monkey').html(chrome.i18n.getMessage("lcl_like_medias_job"));
        $('#like_button_monkey').removeClass('btn-danger')
        $('#like_button_monkey').addClass('btn-primary')


      }
      if ($('#like_button_monkey').is(":visible") == false)
        $('#like_button_monkey').show('slow');

    }

    if (message.option == "set_followers_button") {

      $('#followers_btn_monkey').attr('data-user', message.fenomen);

      if (message.varmi) {
        $('#followers_btn_monkey').attr('data-action', "remove");
        $('#followers_btn_monkey').html(chrome.i18n.getMessage("lcl_remove_followers_collect_job"));
        $('#followers_btn_monkey').addClass('btn-danger')
        $('#followers_btn_monkey').removeClass('btn-success')


      }
      else {
        $('#followers_btn_monkey').attr('data-action', "add");
        $('#followers_btn_monkey').html(chrome.i18n.getMessage("lcl_collect_from_followers"));
        $('#followers_btn_monkey').removeClass('btn-danger')
        $('#followers_btn_monkey').addClass('btn-success')


      }
      if ($('#user_buttons_monkey').is(":visible") == false)
        $('#user_buttons_monkey').show('slow');

    }

    if (message.option == "set_commenters_button") {

      $('#commenters_btn_monkey').attr('data-user', message.fenomen);

      if (message.varmi) {
        $('#commenters_btn_monkey').attr('data-action', "remove");
        $('#commenters_btn_monkey').html(chrome.i18n.getMessage("lcl_remove_comments_likes_collect_job"));
        $('#commenters_btn_monkey').addClass('btn-danger')
        $('#commenters_btn_monkey').removeClass('btn-success')


      }
      else {
        $('#commenters_btn_monkey').attr('data-action', "add");
        $('#commenters_btn_monkey').html(chrome.i18n.getMessage("lcl_collect_from_comments_likes"));
        $('#commenters_btn_monkey').removeClass('btn-danger')
        $('#commenters_btn_monkey').addClass('btn-success')


      }
      if ($('#user_buttons_monkey').is(":visible") == false)
        $('#user_buttons_monkey').show('slow');

    }


  });


  setInterval(function () {
    do_jobs();
  }, 3000);


}

//end
