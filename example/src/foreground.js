






$(".lcl_gender_filter").parent().parent().after('<tr><td colspan="3"><h4>Filter By Language</h4> <h5 style="color: deeppink">Available on Pro version <a href="https://followermonkey.com/defindex/install">Click to download PRO</a></h5><div class="row"><div class="col-md-7"><select disabled size="8" multiple id="diller"><option value="af">Afrikanns</option><option value="sq">Albanian</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="eu">Basque</option><option value="bn">Bengali</option><option value="bg">Bulgarian</option><option value="ca">Catalan</option><option value="km">Cambodian</option><option value="zh">Chinese (Mandarin)</option><option value="hr">Croation</option><option value="cs">Czech</option><option value="da">Danish</option><option value="nl">Dutch</option><option value="en">English</option><option value="et">Estonian</option><option value="fj">Fiji</option><option value="fi">Finnish</option><option value="fr">French</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="gu">Gujarati</option><option value="he">Hebrew</option><option value="hi">Hindi</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="jw">Javanese</option><option value="ko">Korean</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="mk">Macedonian</option><option value="ms">Malay</option><option value="ml">Malayalam</option><option value="mt">Maltese</option><option value="mi">Maori</option><option value="mr">Marathi</option><option value="mn">Mongolian</option><option value="ne">Nepali</option><option value="no">Norwegian</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="pa">Punjabi</option><option value="qu">Quechua</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sm">Samoan</option><option value="sr">Serbian</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="es">Spanish</option><option value="sw">Swahili</option><option value="sv">Swedish </option><option value="ta">Tamil</option><option value="tt">Tatar</option><option value="te">Telugu</option><option value="th">Thai</option><option value="bo">Tibetan</option><option value="to">Tonga</option><option value="tr">Turkish</option><option value="uk">Ukranian</option><option value="ur">Urdu</option><option value="uz">Uzbek</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="xh">Xhosa</option></select></div><div class="col-md-5"><button disabled id="set_all_language" class="btn btn-sm btn-success">Accept All Languages</button><br><div style="background-color:#f8cba1;height: 100px;overflow-y: scroll;" id="diller_onizleme"></div></div></div><div class="row">* Multiple select option (Windows: ctrl+click, MAC:cmd+click)</div></td></tr>')

$("#from_locations_li").after('<li id="from_location_areas_li"><a href="#from_location_areas_tab" id="from_location_areas_tab_btn" data-toggle="tab" aria-expanded="true">Locations Areas</a></li>');


$(".lcl_pool_collect_locations").parent().after('<tr><td>Pool Collect (locations areas)</td><td><input id="get_location_areas_interval_input" class="form-control valid" type="text" aria-invalid="false"></td><td><input id="get_location_areas_error_interval_input" class="form-control" type="text"></td></tr>')

$("body").append('<div id="version_modal" class="modal fade" tabindex="-1" role="dialog" ><div class="modal-dialog"><div class="modal-content"><div class="modal-header">    <h3 >New Version Update</h3>    </div><div class="modal-body">       New Version <span id="version_number"></span><br>please read about new update from below link<br><a href="https://followermonkey.com/defindex/new_updates" target="_blank">https://followermonkey.com/defindex/new_updates</a>   </div>   <div class="modal-footer">      <button class="btn btn-primary" id="update_now" data-dismiss="modal">Update Now</button>    </div>   </div></div>   </div>');


$("#insert_time").parent().parent().after('<h4>Insert random minutes to each HOURs</h4><div class="row"> <div class="col-md-4">Start from<input id="random_time_start" class="form-control input-small" size="3" type="number" value="15" ></div><div class="col-md-4"> to <input id="random_time_end" size="3" class="form-control" type="number" value="20" > </div><div class="col-md-4"><button id="insert_random_times" style="margin-top:24px;" class="btn btn-success">Insert</button></div></div>')

$("#whitelist_btn").after('<a href="#import_export_modal" id="import_export_btn" role="button" data-toggle="modal" ><span class="glyphicon glyphicon-hdd "></span> <span>Import/Export</span> </a>')

$("body").append('<div id="import_export_modal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static"  data-keyboard="false" ><div class="modal-dialog"><div class="modal-content"><div class="modal-header">    <h3 >Import / Export</h3>    </div><div class="modal-body">\
       <div class="tabbable">\
        <ul class="nav nav-tabs">\
        <li class="active"><a href="#export_tab" id="export_tab_btn" data-toggle="tab">Export</a></li>\
        <li><a href="#import_tab" id="import_tab_btn" data-toggle="tab" >Import</a></li>    \
        </ul>\
        <div class="tab-content ">      \
 <div class="tab-pane active" id="export_tab">\
            <div class="row">\
 <div class="col-md-12">\
            <h3>Export</h3>  <textarea rows="10" id="export_text_area" readonly class="form-control"></textarea>   <div class="checkbox">\
                        <label>\
                            <input id="export_old_pool" type="checkbox"> Export Past Following Datas (warning: it may HARD your computer) \
                        </label>\
                      </div>     \
            </div>\
            </div>\
        </div>\
 <div class="tab-pane" id="import_tab">\
            <div class="row">\
 <div class="col-md-12">\
            <h3>Import</h3> <textarea rows="10" id="import_text_area" class="form-control"></textarea> \
            <span>White List import Status:</span> <div style="background-color: #eae6e6;width: 100%;height: 5px;"><div id="durum_cubugu_white_list2" style="height: 5px;margin: 0px;padding: 0px;font-size: 11px;text-align: right;background-color: #f28238;"></div></div>     \
            <span>Past Unfollows import Status:</span> <div style="background-color: #eae6e6;width: 100%;height: 5px;"><div id="durum_cubugu_unfollows" style="height: 5px;margin: 0px;padding: 0px;font-size: 11px;text-align: right;background-color: #f28238;"></div></div>     \
            <span>Past Follows import Status:</span> <div style="background-color: #eae6e6;width: 100%;height: 5px;"><div id="durum_cubugu_follows_done" style="height: 5px;margin: 0px;padding: 0px;font-size: 11px;text-align: right;background-color: #f28238;"></div></div>     \
            </div>\
            </div>\
        </div>\
        </div>\
   </div>\
       </div>   <div class="modal-footer">      <button class="btn btn-primary" data-type="export" id="import_export_now">EXPORT</button> <button class="btn btn-danger" id="import_export_reload" >Reload Extension</button>    </div>   </div></div>   </div>');



$("body").append('<div style="position: absolute;left: 10px;top: 10px;z-index: 1001;font-size: 12px;" > <span><b>Username : </b></span><span id="username_status_top"></span><br></div>');




if (chrome.i18n.getUILanguage()=="tr")
  $(".menuler").children().first().append('<div class="row"><div class="col-md-6"> <a target="_blank" href="https://chrome.google.com/webstore/detail/followermonkey-instagram/eggdnoniecaafdiiajjlloalnjmcpmfn?hl=en" > <img class="img-responsive" src="https://followermonkey.com/img/sendy/lottery_tr.png" ></a> </div><div class="col-md-6"><a target="_blank" href="https://followermonkey.com/defindex/faq#picodash" ><img class="img-responsive" src="https://followermonkey.com/img/sendy/location_area_tr.png" ></a> </div></div>')
else
  $(".menuler").children().first().append('<div class="row"><div class="col-md-6"> <a target="_blank" href="https://chrome.google.com/webstore/detail/followermonkey-instagram/eggdnoniecaafdiiajjlloalnjmcpmfn" > <img class="img-responsive" src="https://followermonkey.com/img/sendy/lottery_en.png" ></a> </div><div class="col-md-6"><a target="_blank" href="https://followermonkey.com/defindex/faq#picodash" ><img class="img-responsive" src="https://followermonkey.com/img/sendy/location_area_en.png" ></a> </div></div>')



$('#export_tab_btn').click(function() {
  $("#import_export_now").html('EXPORT');
  $("#import_export_now").attr('data-type','export');
});

$('#import_tab_btn').click(function() {
  $("#import_export_now").html('IMPORT');
  $("#import_export_now").attr('data-type','import');
});

$('#import_export_now').click(function() {
  if($(this).attr('data-type')=='import')
    import_all();
  else
    export_all();
});


$('#import_export_reload').click(function() {

  $('#import_export_modal').modal('hide');
  setTimeout(function(){ chrome.runtime.reload(); }, 1000);
});






function websql_dump(database,donus)

{


  veriler=[];

  function get_rows(tables)
  {


    if (tables.length==0)
    {
      donus(veriler)
      return;
    }



    database.transaction(function(tx) {
      tx.executeSql('SELECT * FROM  '+tables[0], [], function(tx, results) {



        exportSql2 = [];
        for (var i = 0; i < results.rows.length; i++) {


          var row = results.rows.item(i);
          var _fields = [];
          var _values = [];
          for (var col in row) {
            _fields.push(col);
            if (typeof row[col] === "string")
              _values.push('"' + row[col] + '"');
            else
              _values.push(row[col]);

          }
          exportSql2.push("INSERT INTO " + tables[0] + " (" + _fields.join(",") + ") VALUES (" + _values.join(",") + ");");
        }

        if (exportSql2.length!=0)
          veriler.push(exportSql2);

        tables.shift();
        get_rows(tables)



      }, null);
    });


  }



  database.transaction(function(tx) {
    tx.executeSql('SELECT name FROM  sqlite_master WHERE type="table" and name!="__WebKitDatabaseInfoTable__"', [], function(tx, results) {
      var len = results.rows.length;


      exportSql = []
      for (i = 0; i < len; i++) {
        exportSql.push(results.rows.item(i)["name"])
      }

      get_rows(exportSql)


    }, null);
  });

}

function export_all()
{

  user_id=my_cookie2("genel","user_id");

  websql_dump(db_sql[user_id], function (veriler1){


    websql_dump(db_sql_comments[user_id], function (veriler2){


      veri1_arr=[]
      veriler1.forEach(function(element) {

        element.forEach(function(element2) {
          veri1_arr.push(element2)
        });

      });

      text="---start---followermonkey_---start---"+JSON.stringify(veri1_arr)+"---endof---followermonkey_---endof---";

      veri2_arr=[]
      veriler2.forEach(function(element) {

        element.forEach(function(element2) {
          veri2_arr.push(element2)
        });

      });
      text=text+"---start---followermonkey_comments3_---start---"+JSON.stringify(veri2_arr)+"---endof---followermonkey_comments3_---endof---";


      var white_object_store=db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2")

      white_object_store.getAll().onsuccess = function(event) {


        if (event.target.result.length>0)
        {
          text=text+"---start---white_list2---start---"+JSON.stringify(event.target.result)


          text=text+"---endof---white_list2---endof---";
        }




        var settings=db_index[user_id].transaction(["settings"],"readwrite").objectStore("settings")

        settings.getAll().onsuccess = function(event) {


          if (event.target.result.length>0)
          {

            text=text+"---start---settings---start---"+JSON.stringify(event.target.result)

            text=text+"---endof---settings---endof---";
          }

          if ($('#export_old_pool').is(':checked'))
          {

            var unfollows=db_index[user_id].transaction(["unfollows"],"readwrite").objectStore("unfollows")

            unfollows.getAll().onsuccess = function(event) {


              if (event.target.result.length>0)
              {

                text=text+"---start---unfollows---start---"+JSON.stringify(event.target.result)

                text=text+"---endof---unfollows---endof---";
              }

              var follows_done=db_index[user_id].transaction(["follows_done"],"readwrite").objectStore("follows_done")

              follows_done.getAll().onsuccess = function(event) {


                if (event.target.result.length>0)
                {

                  text=text+"---start---follows_done---start---"+JSON.stringify(event.target.result)

                  text=text+"---endof---follows_done---endof---";
                }




                $('#export_text_area').val(text)

              };





            };
          }
          else
            $('#export_text_area').val(text)

        };

      };





    });




  });

}




$('#export_text_area').click(function() {
  $(this).focus()
  $(this).select()

});

function import_all()
{

  import_data=$('#import_text_area').val();

  user_id=my_cookie2("genel","user_id");



  import_arr1=import_data.split("---endof---followermonkey_---endof---");
  if (import_arr1.length>1)
  {
    import_arr2=import_arr1[0].split("---start---followermonkey_---start---");
    jsonObj = JSON.parse(import_arr2[1]);


    $.each(jsonObj, function(i, item) {

      db_sql[user_id].transaction(function(tz) {
        tz.executeSql(item);
      });

    });



  }


  import_arr1=import_data.split("---endof---followermonkey_comments3_---endof---");
  if (import_arr1.length>1)
  {
    import_arr2=import_arr1[0].split("---start---followermonkey_comments3_---start---");
    jsonObj = JSON.parse(import_arr2[1]);
    $.each(jsonObj, function(i, item) {

      db_sql_comments[user_id].transaction(function(tz) {
        tz.executeSql(item);
      });

    });

  }


  import_arr1=import_data.split("---endof---white_list2---endof---");
  if (import_arr1.length>1)
  {
    import_arr2=import_arr1[0].split("---start---white_list2---start---");
    jsonObj_white_list2 = JSON.parse(import_arr2[1]);

    function putNext_white_list2(i) {

      $('#durum_cubugu_white_list2').html("%"+Math.round(100*i/jsonObj_white_list2.length))
      $('#durum_cubugu_white_list2').css("width",Math.round(100*i/jsonObj_white_list2.length)+"%")

      if (i<jsonObj_white_list2.length) {


        db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2").put(jsonObj_white_list2[i]).onsuccess =setTimeout(function(){ putNext_white_list2(++i); }, 1);



      }

    }

    putNext_white_list2(0)

  }



  import_arr1=import_data.split("---endof---settings---endof---");
  if (import_arr1.length>1)
  {
    import_arr2=import_arr1[0].split("---start---settings---start---");
    jsonObj_settings = JSON.parse(import_arr2[1]);


    function putNext_settings(i) {

      if (i<jsonObj_settings.length) {
        console.log(jsonObj_settings[i]);

        db_index[user_id].transaction(["settings"],"readwrite").objectStore("settings").put(jsonObj_settings[i]).onsuccess =setTimeout(function(){ putNext_settings(++i); }, 1);


      }
    }

    putNext_settings(0)


  }


  import_arr1=import_data.split("---endof---unfollows---endof---");
  if (import_arr1.length>1)
  {
    import_arr2=import_arr1[0].split("---start---unfollows---start---");
    jsonObj_unfollows = JSON.parse(import_arr2[1]);

    function putNext_unfollows(i) {
      $('#durum_cubugu_unfollows').html("%"+Math.round(100*i/jsonObj_unfollows.length))
      $('#durum_cubugu_unfollows').css("width",Math.round(100*i/jsonObj_unfollows.length)+"%")

      if (i<jsonObj_unfollows.length) {

        db_index[user_id].transaction(["unfollows"],"readwrite").objectStore("unfollows").put(jsonObj_unfollows[i]).onsuccess =setTimeout(function(){ putNext_unfollows(++i); }, 1);


      }

    }

    putNext_unfollows(0)

  }


  import_arr1=import_data.split("---endof---follows_done---endof---");
  if (import_arr1.length>1)
  {
    import_arr2=import_arr1[0].split("---start---follows_done---start---");
    jsonObj_follows_done = JSON.parse(import_arr2[1]);

    function putNext_follows_done(i) {

      $('#durum_cubugu_follows_done').html("%"+Math.round(100*i/jsonObj_follows_done.length))
      $('#durum_cubugu_follows_done').css("width",Math.round(100*i/jsonObj_follows_done.length)+"%")

      if (i<jsonObj_follows_done.length) {

        db_index[user_id].transaction(["follows_done"],"readwrite").objectStore("follows_done").put(jsonObj_follows_done[i]).onsuccess =setTimeout(function(){ putNext_follows_done(++i); }, 1);


      }

    }

    putNext_follows_done(0)

  }






}



function randomIntFromInterval(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

function insert_time_auto() {

  if ($('#random_time_start').val()>$('#random_time_end').val())
  {
    alert("Start time number can't be larger than end time");
    return;
  }

  var i = 0, howManyTimes = 24;
  function f() {


    if( i < howManyTimes ){


      uzunluk=randomIntFromInterval(parseInt($('#random_time_start').val()),parseInt($('#random_time_end').val()));//10

      baslangic_aralik=59-uzunluk;//49

      s = randomIntFromInterval(1,baslangic_aralik);//12
      l = (s+uzunluk);//22

      if (s<10)
        s="0"+s;

      if (l<10)
        l="0"+l;

      $('#start_time').val(i+':'+s);
      $('#end_time').val(i+':'+l);
      insert_time()

      i++;
      setTimeout( f, 500 );
    }
    return
  }
  f();

}



$('#insert_random_times').click(function() {
  insert_time_auto();
});



$('#set_all_language').click(function() {
  my_cookie2(user_id,'diller', '');
  $("#diller_onizleme").html('');
  $('#diller').val([]);

});


$("#diller").change(function () {

  var selText="";
  $("#diller option:selected").each(function () {

    if ($(this).length)
    {
      if (selText=="")
        selText =$(this).text();
      else
        selText =selText + "<br>" + $(this).text();

    }



  });

  $("#diller_onizleme").html(selText)


  my_cookie2(user_id,'diller', $(this).val().join(","));




});

$("#who_follow").parent().parent().after('<p></p><div class="checkbox"><label><input id="just_unfollow_script_followings" type="checkbox"> <span>Just unfollow Script Followings</span></label></div>')
$("#whitelist_btn").after('<a href="#" id="reload_btn" data-placement="left" data-toggle="tooltip" title="When the extention STOPS working. Please use Reload Link!"><span class="glyphicon glyphicon-refresh "></span> <span>Reload Extension !!!</span> </a>')

$('[data-toggle="tooltip"]').tooltip();

$('#reload_btn').click(function() {
  chrome.runtime.reload();
});





$("#logo").attr('src',chrome.extension.getURL('/img/logo.png'));
$(".lcl_gender_filter").html(chrome.i18n.getMessage("lcl_gender_filter"))
$(".lcl_filter_all_gender").html(chrome.i18n.getMessage("lcl_filter_all_gender"))
$(".lcl_filter_males_unknown").html(chrome.i18n.getMessage("lcl_filter_males_unknown"))
$(".lcl_filter_females_unknown").html(chrome.i18n.getMessage("lcl_filter_females_unknown"))
$(".lcl_filter_females").html(chrome.i18n.getMessage("lcl_filter_females"))
$(".lcl_filter_males").html(chrome.i18n.getMessage("lcl_filter_males"))
$(".lcl_desc").html(chrome.i18n.getMessage("lcl_desc"))

$(".lcl_followers_count").html(chrome.i18n.getMessage("lcl_followers_count"))
$(".lcl_following_count").html(chrome.i18n.getMessage("lcl_following_count"))
$(".lcl_medias_count").html(chrome.i18n.getMessage("lcl_medias_count"))
$(".lcl_filter_public").html(chrome.i18n.getMessage("lcl_filter_public"))
$(".lcl_filter_private").html(chrome.i18n.getMessage("lcl_filter_private"))
$(".lcl_filter_private_public").html(chrome.i18n.getMessage("lcl_filter_private_public"))
$(".lcl_filter_external_link").html(chrome.i18n.getMessage("lcl_filter_external_link"))
$(".lcl_filter_desciription_black").html(chrome.i18n.getMessage("lcl_filter_desciription_black"))
$(".lcl_larger_than").html(chrome.i18n.getMessage("lcl_larger_than"))
$(".lcl_smaller_than").html(chrome.i18n.getMessage("lcl_smaller_than"))

$(".lcl_user_filters").html(chrome.i18n.getMessage("lcl_user_filters"))
$(".lcl_declare_sleep_times_comments").html(chrome.i18n.getMessage("lcl_declare_sleep_times_comments"))
$(".lcl_comments_sleep_times").html(chrome.i18n.getMessage("lcl_comments_sleep_times"))
$(".lcl_max_comments_limit").html(chrome.i18n.getMessage("lcl_max_comments_limit"))
$(".lcl_error_comments_interval_time").html(chrome.i18n.getMessage("lcl_error_comments_interval_time"))
$(".lcl_comments_interval_time").html(chrome.i18n.getMessage("lcl_comments_interval_time"))
$(".lcl_comments_status").html(chrome.i18n.getMessage("lcl_comments_status"))
$(".lcl_comments").html(chrome.i18n.getMessage("lcl_comments"))
$(".lcl_auto_comments").html(chrome.i18n.getMessage("lcl_auto_comments"))
$(".lcl_lates_comments").html(chrome.i18n.getMessage("lcl_lates_comments"))
$(".lcl_pool_jobs").html(chrome.i18n.getMessage("lcl_pool_jobs"))
$(".lcl_settings").html(chrome.i18n.getMessage("lcl_settings"))
$(".lcl_statistics").html(chrome.i18n.getMessage("lcl_statistics"))
$(".lcl_create_unfollow_job").html(chrome.i18n.getMessage("lcl_create_unfollow_job"))
$(".lcl_auto_likes").html(chrome.i18n.getMessage("lcl_auto_likes"))
$(".lcl_sleep_times").html(chrome.i18n.getMessage("lcl_sleep_times"))
$(".lcl_white_list").html(chrome.i18n.getMessage("lcl_white_list"))
$(".lcl_white_list_for").html(chrome.i18n.getMessage("lcl_white_list_for"))
$(".lcl_secure_settings").html(chrome.i18n.getMessage("lcl_secure_settings"))
$(".lcl_rate").html(chrome.i18n.getMessage("lcl_rate"))
$(".lcl_pool").html(chrome.i18n.getMessage("lcl_pool"))
$(".lcl_unfollow_status").html(chrome.i18n.getMessage("lcl_unfollow_status"))
$(".lcl_scanned_users").html(chrome.i18n.getMessage("lcl_scanned_users"))
$("#stop_scan_btn").html(chrome.i18n.getMessage("lcl_stop_scan"))
$("#remove_unfollow_job_btn").html(chrome.i18n.getMessage("lcl_remove_unfollow_job"))
$(".lcl_follow_status").html(chrome.i18n.getMessage("lcl_follow_status"))
$(".lcl_latest_follows").html(chrome.i18n.getMessage("lcl_latest_follows"))
$(".lcl_user_name").html(chrome.i18n.getMessage("lcl_user_name"))
$(".lcl_follow_time").html(chrome.i18n.getMessage("lcl_follow_time"))
$(".lcl_unfollow_time").html(chrome.i18n.getMessage("lcl_unfollow_time"))
$(".lcl_latest_likes").html(chrome.i18n.getMessage("lcl_latest_likes"))
$(".lcl_media").html(chrome.i18n.getMessage("lcl_media"))
$(".lcl_time").html(chrome.i18n.getMessage("lcl_time"))
$(".lcl_latest_unfollows").html(chrome.i18n.getMessage("lcl_latest_unfollows"))
$(".lcl_error_log").html(chrome.i18n.getMessage("lcl_error_log"))
$(".lcl_action").html(chrome.i18n.getMessage("lcl_action"))
$(".lcl_item").html(chrome.i18n.getMessage("lcl_item"))
$(".lcl_error_type").html(chrome.i18n.getMessage("lcl_error_type"))
$(".lcl_next_action_time").html(chrome.i18n.getMessage("lcl_next_action_time"))
$(".lcl_user_names_desc").html(chrome.i18n.getMessage("lcl_user_names_desc"))
$(".lcl_close").html(chrome.i18n.getMessage("lcl_close"))
$(".lcl_follow_sleep_times").html(chrome.i18n.getMessage("lcl_follow_sleep_times"))
$(".lcl_unfollow_sleep_times").html(chrome.i18n.getMessage("lcl_unfollow_sleep_times"))
$(".lcl_like_sleep_times").html(chrome.i18n.getMessage("lcl_like_sleep_times"))
$(".lcl_declare_sleep_times_follow").html(chrome.i18n.getMessage("lcl_declare_sleep_times_follow"))
$(".lcl_declare_sleep_times_unfollow").html(chrome.i18n.getMessage("lcl_declare_sleep_times_unfollow"))
$(".lcl_declare_sleep_times_like").html(chrome.i18n.getMessage("lcl_declare_sleep_times_like"))
$(".lcl_start_time").html(chrome.i18n.getMessage("lcl_start_time"))
$(".lcl_end_time").html(chrome.i18n.getMessage("lcl_end_time"))
$(".lcl_add").html(chrome.i18n.getMessage("lcl_add"))
$(".lcl_delete").html(chrome.i18n.getMessage("lcl_delete"))
$(".lcl_tags_to_collect_media").html(chrome.i18n.getMessage("lcl_tags_to_collect_media"))
$(".lcl_like_status").html(chrome.i18n.getMessage("lcl_like_status"))
$(".lcl_collect_medias_from_home_timeline_to_like").html(chrome.i18n.getMessage("lcl_collect_medias_from_home_timeline_to_like"))
$(".lcl_collect_medias_from_tags_to_like").html(chrome.i18n.getMessage("lcl_collect_medias_from_tags_to_like"))
$(".lcl_like_interval_time").html(chrome.i18n.getMessage("lcl_like_interval_time"))
$(".lcl_error_like_interval_time").html(chrome.i18n.getMessage("lcl_error_like_interval_time"))
$(".lcl_max_like_limit").html(chrome.i18n.getMessage("lcl_max_like_limit"))

$(".lcl_followers").html(chrome.i18n.getMessage("lcl_followers"))
$(".lcl_comments_likes").html(chrome.i18n.getMessage("lcl_comments_likes"))
$(".lcl_searches").html(chrome.i18n.getMessage("lcl_searches"))
$(".lcl_locations").html(chrome.i18n.getMessage("lcl_locations"))
$(".lcl_from_followers").html(chrome.i18n.getMessage("lcl_from_followers"))
$(".lcl_from_comments_likes").html(chrome.i18n.getMessage("lcl_from_comments_likes"))
$(".lcl_from_searches").html(chrome.i18n.getMessage("lcl_from_searches"))
$(".lcl_from_locations").html(chrome.i18n.getMessage("lcl_from_locations"))

$(".lcl_pool_settings").html(chrome.i18n.getMessage("lcl_pool_settings"))
$(".lcl_job_interval_times").html(chrome.i18n.getMessage("lcl_job_interval_times"))
$(".lcl_others").html(chrome.i18n.getMessage("lcl_others"))
$(".lcl_pool_limit").html(chrome.i18n.getMessage("lcl_pool_limit"))
$(".lcl_delete_pool").html(chrome.i18n.getMessage("lcl_delete_pool"))
$(".lcl_delete_pool_history").html(chrome.i18n.getMessage("lcl_delete_pool_history"))
$(".lcl_jobs").html(chrome.i18n.getMessage("lcl_jobs"))
$(".lcl_interval_time").html(chrome.i18n.getMessage("lcl_interval_time"))
$(".lcl_after_rate_limit_error").html(chrome.i18n.getMessage("lcl_after_rate_limit_error"))
$(".lcl_follow").html(chrome.i18n.getMessage("lcl_follow"))
$(".lcl_unfollow").html(chrome.i18n.getMessage("lcl_unfollow"))
$(".lcl_pool_collect_followers").html(chrome.i18n.getMessage("lcl_pool_collect_followers"))
$(".lcl_pool_collect_commenters").html(chrome.i18n.getMessage("lcl_pool_collect_commenters"))
$(".lcl_pool_collect_searches").html(chrome.i18n.getMessage("lcl_pool_collect_searches"))
$(".lcl_pool_collect_locations").html(chrome.i18n.getMessage("lcl_pool_collect_locations"))
$(".lcl_limits").html(chrome.i18n.getMessage("lcl_limits"))
$(".lcl_follow_limit").html(chrome.i18n.getMessage("lcl_follow_limit"))
$(".lcl_unfollow_limit").html(chrome.i18n.getMessage("lcl_unfollow_limit"))

$(".lcl_follows").html(chrome.i18n.getMessage("lcl_follows"))
$(".lcl_unfollows").html(chrome.i18n.getMessage("lcl_unfollows"))
$(".lcl_likes").html(chrome.i18n.getMessage("lcl_likes"))

$(".lcl_dont_unfollow_that_you_follow").html(chrome.i18n.getMessage("lcl_dont_unfollow_that_you_follow"))
$(".lcl_until_1").html(chrome.i18n.getMessage("lcl_until_1"))
$(".lcl_until_2").html(chrome.i18n.getMessage("lcl_until_2"))
$(".lcl_until_3").html(chrome.i18n.getMessage("lcl_until_3"))
$(".lcl_dont_unfollow_followers").html(chrome.i18n.getMessage("lcl_dont_unfollow_followers"))
$(".lcl_cancel").html(chrome.i18n.getMessage("lcl_cancel"))
$(".lcl_start").html(chrome.i18n.getMessage("lcl_start"))

$(".lcl_licence").html(chrome.i18n.getMessage("lcl_licence"))
$(".lcl_buy_licence").html(chrome.i18n.getMessage("lcl_buy_licence"))
$(".lcl_buy_now").html(chrome.i18n.getMessage("lcl_buy_now"))
$(".lcl_buy_for_only").html(chrome.i18n.getMessage("lcl_buy_for_only"))

$(".lcl_how_to_use").html(chrome.i18n.getMessage("lcl_how_to_use"))
$(".lcl_check_licence").html(chrome.i18n.getMessage("lcl_check_licence"))
$(".lcl_prices").html(chrome.i18n.getMessage("lcl_prices"))
$(".lcl_tos").html(chrome.i18n.getMessage("lcl_tos"))
$(".lcl_contact").html(chrome.i18n.getMessage("lcl_contact"))
$(".lcl_privacy_policy").html(chrome.i18n.getMessage("lcl_privacy_policy"))
$(".lcl_affilate").html(chrome.i18n.getMessage("lcl_affilate"))
$(".lcl_collect_current_follows").html(chrome.i18n.getMessage("lcl_collect_current_follows"))
$(".lcl_stop_collect_current_follows").html(chrome.i18n.getMessage("lcl_stop_collect_current_follows"))
$(".lcl_auto_unfollow").html(chrome.i18n.getMessage("lcl_auto_unfollow"))
$(".lcl_auto_unfollow_enable").html(chrome.i18n.getMessage("lcl_auto_unfollow_enable"))
$(".lcl_auto_unfollow_day").html(chrome.i18n.getMessage("lcl_auto_unfollow_day"))
$(".lcl_day_1").html(chrome.i18n.getMessage("lcl_day_1"))
$(".lcl_day_2").html(chrome.i18n.getMessage("lcl_day_2"))
$(".lcl_day_3").html(chrome.i18n.getMessage("lcl_day_3"))

$(".lcl_collect_comments").html(chrome.i18n.getMessage("lcl_collect_comments"))
$(".lcl_collect_likes").html(chrome.i18n.getMessage("lcl_collect_likes"))
$(".lcl_collect_title").html(chrome.i18n.getMessage("lcl_collect_title"))

$(".lcl_delete_white_list_likes_comments").html(chrome.i18n.getMessage("lcl_delete_white_list_likes_comments"))
$(".lcl_clear_white_list").html(chrome.i18n.getMessage("lcl_clear_white_list"))






var db_index=[];
var db_sql=[];
var db_sql_comments=[];

var db_sql_filters=[];



chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {


  if (message.option=="version_update")
  {
    $("#version_number").text(message.version)

    $("#version_modal").modal();



  }


  if (message.option=="white_list_update")
    update_white_list();



  if (message.option=="licence")
  {

    $("#licence_price").html(message.price)
    $("#licence_price2").html(message.price)
    $("#baska_bir_aciklama").html(message.baska_aciklama)
    $("#buy_username").html('@'+message.username)
    $("#username").val(message.username)
    $("#lisans_modal").modal()
  }

  if (message.option=="check_insta_tab")
  {
    if (message.durum==false)
      $(".bildirim").show();
    else
      $(".bildirim").hide();


  }



});





function update_chart(datalari, basligi) {
  $('#istatistik_tablo').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: basligi + 's'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: basligi + ' counts'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: '<b>{point.y:.1f}</b>'
    },
    series: [{
      name: basligi + 's',
      data: datalari,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  });

}




function get_date_time(zaman)

{
  zaman = typeof zaman !== 'undefined' ? zaman : Date.now();

  var d = new Date(zaman);
  var newDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
  my_time = new Date(newDate).getTime();
  return my_time;

}


function get_date_format(zaman)

{
  zaman = typeof zaman !== 'undefined' ? zaman : Date.now();

  var d = new Date(zaman);
  var newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  return newDate;

}





function tablo_olustur(tablo) {


  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;

  baslangic = get_date_time(Date.now() - 604800000);

  //console.log(baslangic);

  if (tablo=="st_comments")
    database_i=db_sql_comments[user_id];
  else
    database_i=db_sql[user_id];

  database_i.transaction(function(tx) {
    tx.executeSql('SELECT * FROM ' + tablo + ' where gun>=' + baslangic + ' order by gun asc', [], function(tx, results) {
      var len = results.rows.length,
        i;

      if (len == 0) {
        $('#istatistik_tablo').html('No Data Available');

        return;
      }

      tablo_datalari = []
      for (i = 0; i < len; i++) {
        zamanisi = get_date_format(results.rows.item(i).gun);
        tablo_datalari.push([zamanisi, results.rows.item(i).sayi]);
      }

      if (tablo == "st_follow")
        baslikisi = "Follow";
      else if (tablo == "st_unfollow")
        baslikisi = "UnFollow";
      else if (tablo == "st_followers")
        baslikisi = "Follower";
      else if (tablo == "st_likes")
        baslikisi = "Like";
      else if (tablo == "st_comments")
        baslikisi = "Comments";


      update_chart(tablo_datalari, baslikisi)

      //console.log(tablo_datalari);
    }, null);
  });

}



function tablo_sec() {

  if ($("#follow_tab_li").hasClass("active"))
    tablo_olustur('st_follow');
  else if ($("#unfollow_tab_li").hasClass("active"))
    tablo_olustur('st_unfollow');
  else if ($("#followers_tab_li").hasClass("active"))
    tablo_olustur('st_followers');
  else if ($("#likes_tab_li").hasClass("active"))
    tablo_olustur('st_likes');
  else if ($("#comments_tab_li").hasClass("active"))
    tablo_olustur('st_comments');


}



$('#clear_error_log').click(function() {

  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;

  db_sql[user_id].transaction(function(tz) {
    tz.executeSql('DELETE from  error_log');
  });

  $('#error_log').html("");

});

$('#follow_tab_a_robo').click(function() {
  tablo_olustur('st_follow');
});

$('#unfollow_tab_a_robo').click(function() {
  tablo_olustur('st_unfollow');
});

$('#followers_tab_a_robo').click(function() {
  tablo_olustur('st_followers');
});

$('#likes_tab_a_robo').click(function() {
  tablo_olustur('st_likes');
});

$('#comments_tab_a_robo').click(function() {
  tablo_olustur('st_comments');
});



$('#statistics_modal_btn').click(function() {
  setTimeout(function() {
    tablo_sec();
  }, 1000);

});

$("#unfollow_pool_count").click(function() {
  $('.nav-tabs a[href="#tab2"]').tab('show');
  setTimeout(function() {
    tablo_sec();
  }, 1000);
});


$("#last_follow_statistics").click(function() {
  $('.nav-tabs a[href="#tab1"]').tab('show');
  setTimeout(function() {
    tablo_sec();
  }, 1000);
});



$('#istatistik_yenile').click(function() {
  tablo_sec();

});





function convert_time_str(zaman)
{

  if (zaman=="null")
    return "null";

  var d = new Date(zaman);

  if (d.getDate()<10)
    gun="0"+d.getDate().toString();
  else
    gun=d.getDate().toString();

  if ((d.getMonth() + 1)<10)
    ay="0"+(d.getMonth() + 1).toString();
  else
    ay=(d.getMonth() + 1).toString();

  yil=d.getFullYear();


  if (d.getHours()<10)
    saat="0"+d.getHours().toString();
  else
    saat=d.getHours().toString();


  if (d.getMinutes()<10)
    dakika="0"+d.getMinutes().toString();
  else
    dakika=d.getMinutes().toString();

  if (d.getSeconds()<10)
    saniye="0"+d.getSeconds().toString();
  else
    saniye=d.getSeconds().toString();

  return gun + "/" + ay + "/" + yil + " " + saat + ":" + dakika + ":" + saniye;

}



function lates_follows(user_id) {



//console.log(user_id);

  zaman_farki = Date.now() - parseInt(my_cookie2(user_id,'son_takip_edilenler_zaman'));

  if (zaman_farki < 15000)
    return;



  var i=0;

  var takip_edilenler="";

  function html_yukle(html)
  {
    $('#en_son_takipler').html(html);

  }

  var request = db_index[user_id].transaction(["follows_done"],"readonly").objectStore("follows_done").index('follow_time').openCursor(IDBKeyRange.upperBound("Z", true),'prev').onsuccess = function(e){
    var cursor = e.target.result;


    if (cursor && i<10) {
      if(cursor.value != null && cursor.value != undefined){


        zaman_string= convert_time_str(cursor.value.follow_time);

        takip_edilenler = takip_edilenler + "<tr><td><a href='https://www.instagram.com/" + cursor.value.username + "/' target='_blank'>@" + cursor.value.username + "</a></td>\
                    <td >" + zaman_string + "</td></tr>";


      }
      i++;
      cursor.continue();


    }
    else
    {
      html_yukle(takip_edilenler);
      //my_cookie2(user_id,'son_takip_edilenler_zaman', Date.now());
    }


  };




//my_cookie2(user_id,'son_takip_edilenler_zaman', Date.now());

}




function error_log(user_id) {



//console.log(user_id);

  zaman_farki = Date.now() - parseInt(my_cookie2(user_id,'son_takip_edilenler_zaman'));

  if (zaman_farki < 15000)
    return;




  db_sql[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM error_log order by error_time desc limit 10', [], function(tx, results) {
      var len = results.rows.length,
        i;


      if (len == 0)
        return;


      tablo_datalari = "";
      for (i = 0; i < len; i++) {


        zaman_error= convert_time_str(results.rows.item(i).error_time);
        zaman_next= convert_time_str(results.rows.item(i).next_time);

        if (results.rows.item(i).action=="like" || results.rows.item(i).action=="comment")
          icerik='<a target="_blank" href="https://www.instagram.com/p/' + results.rows.item(i).item + '/">' + results.rows.item(i).item + '</a>'
        else
          icerik='<a target="_blank" href="https://www.instagram.com/' + results.rows.item(i).item + '/">' + results.rows.item(i).item + '</a>'


        if (results.rows.item(i).error_type==" HARD rate limit")
          error_text='<a target="_blank" href="https://followermonkey.com/index/best_setting"><font color="red">'+results.rows.item(i).error_type+'</font></a>';
        else
          error_text=results.rows.item(i).error_type;



        tablo_datalari = tablo_datalari + '<tr ><td>'+results.rows.item(i).action+'</td><td>'+icerik+'</td><td>'+error_text+'</td><td>'+zaman_error+'</td><td>'+zaman_next+'</td><tr>';

      }

      $('#error_log').html(tablo_datalari);



    }, null);
  });




}




function lates_likes(user_id) {



//console.log(user_id);

  zaman_farki = Date.now() - parseInt(my_cookie2(user_id,'son_takip_edilenler_zaman'));

  if (zaman_farki < 15000)
    return;







  db_sql[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM likes where likes_time>0 order by likes_time desc limit 10', [], function(tx, results) {
      var len = results.rows.length,
        i;


      if (len == 0)
        return;


      tablo_datalari = "";
      for (i = 0; i < len; i++) {


        zaman_string= convert_time_str(results.rows.item(i).likes_time);


        tablo_datalari = tablo_datalari + '<tr ><td><a target="_blank" href="https://www.instagram.com/p/' + results.rows.item(i).slug + '/"><img class="img-rounded" width="75px" src="' + results.rows.item(i).image + '" ></a></td><td>'+zaman_string+'</td><tr>';

      }

      $('#lates_likes').html(tablo_datalari);



    }, null);
  });




}



function lates_comments(user_id) {



//console.log(user_id);

  zaman_farki = Date.now() - parseInt(my_cookie2(user_id,'son_takip_edilenler_zaman'));

  if (zaman_farki < 15000)
    return;







  db_sql_comments[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM comments where comments_time>0 order by comments_time desc limit 10', [], function(tx, results) {
      var len = results.rows.length,
        i;


      if (len == 0)
        return;


      tablo_datalari = "";
      for (i = 0; i < len; i++) {


        zaman_string= convert_time_str(results.rows.item(i).comments_time);


        tablo_datalari = tablo_datalari + '<tr ><td><a target="_blank" href="https://www.instagram.com/p/' + results.rows.item(i).slug + '/"><img class="img-rounded" width="75px" src="' + results.rows.item(i).image + '" ></a></td><td>'+zaman_string+'</td><tr>';

      }

      $('#lates_comments').html(tablo_datalari);



    }, null);
  });


  my_cookie2(user_id,'son_takip_edilenler_zaman', Date.now());


}



function lates_unfollows(user_id) {



  zaman_farki = Date.now() - parseInt(my_cookie2(user_id,'son_takip_edilenler_zaman'));

  if (zaman_farki < 15000)
    return;



  var i=0;

  var takip_edilenler="";

  function html_yukle(html)
  {
    $('#en_son_takip_birakmalar').html(html);

  }



  var request = db_index[user_id].transaction(["unfollows"],"readonly").objectStore("unfollows").index('unfollow_time').openCursor(IDBKeyRange.upperBound("Z", true),'prev').onsuccess = function(e){
    var cursor = e.target.result;


    if (cursor && i<10) {
      if(cursor.value != null && cursor.value != undefined){




        zaman_string_follow= convert_time_str(cursor.value.follow_time);
        zaman_string_unfollow= convert_time_str(cursor.value.unfollow_time);
        takip_edilenler = takip_edilenler + "<tr><td><a href='https://www.instagram.com/" + cursor.value.username + "/' target='_blank'>@" + cursor.value.username + "</a></td>\
                    <td >" + zaman_string_follow + "</td><td >" + zaman_string_unfollow + "</td></tr>";


      }
      i++;
      cursor.continue();


    }
    else
    {
      html_yukle(takip_edilenler);
      //my_cookie2(user_id,'son_takip_edilenler_zaman', Date.now());
    }


  };






}


function my_cookie2(id_cook,key_cook,value_cook,donus_cook) {


  if (value_cook === undefined || value_cook === null) {
    deger_cook = localStorage.getItem(key_cook);
    if (deger_cook === undefined || deger_cook === null)
      return null;
    else
      return deger_cook;
  } else {

    localStorage.setItem(key_cook, value_cook);
    db_index[id_cook].transaction(["settings"],"readwrite").objectStore("settings").put({'key':key_cook,'value':value_cook}).onsuccess = function(e) {   if (donus_cook) donus_cook(key_cook,id_cook); };





  }

}


function connect_db()
{

  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;


  $(".bildirim2").hide();

//console.log(user_id+"-- baglandi");


  db_sql[user_id] = window.openDatabase('followermonkey_' + user_id, '', 'followermonkey', null, function(db) {});

  db_sql_comments[user_id] = window.openDatabase('followermonkey_comments3_' + user_id, '', 'followermonkey Comments', null, function(db) {});
  db_sql_filters[user_id] = window.openDatabase('followermonkey_filters_' + user_id, '', 'followermonkey Filters', null, function(db) {});


  var openRequest = indexedDB.open("followermonkey_" + user_id,10);

  openRequest.onsuccess = function(e) {


    db_index[user_id] = e.target.result;

    update_all();
  }


}


$('.lcl_stop_collect_current_follows').click(function(e) {


  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;

  $(this).hide('slow');
  $('.lcl_collect_current_follows').show('slow');

  my_cookie2(user_id,"white_list_cursor","end");



});


function start_white_list_search()

{


  if (confirm('Are you sure you want to scan your current followings as white list?'))

  {



    user_id=my_cookie2("genel","user_id");

    if (user_id==null)
      return;

    $('.lcl_collect_current_follows').hide('slow');
    $('.lcl_stop_collect_current_follows').show('slow');


    my_cookie2(user_id,"white_list_cursor","bos");

  }

}


$('.lcl_delete_white_list_likes_comments').click(function(e) {

  lcl_delete_white_list_likes_comments();
  update_white_list();

});


$('.lcl_clear_white_list').click(function(e) {

  lcl_clear_white_list();
  update_white_list();

});





$('#copy_clipboard').click(function(e) {



  $('#white_list_users2').show();

  $( "#white_list_users2" ).select();


  text = window.getSelection().toString();
  document.execCommand('copy');
  $('#white_list_users2').hide();
  alert("White list copied to clipboard!")


});


$('.lcl_collect_current_follows').click(function(e) {



  start_white_list_search();


});


$('#start_unfollow_job').click(function(e) {


  user_id=my_cookie2("genel","user_id");


//console.log("geldi1")


  if (user_id==null)
    return;

//console.log("geldi2")

  my_cookie2(user_id,"unfollow_scanned_users","0");
  my_cookie2(user_id,"unfollow_cursor","bos");



});


$('#stop_scan_btn').click(function(e) {


  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;


  my_cookie2(user_id,"unfollow_cursor","end");

  $(this).hide('slow');

});


$('#remove_unfollow_job_btn').click(function(e) {


  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;


  my_cookie2(user_id,"unfollow_cursor","end");

  db_index[user_id].transaction(["unfollows_waiting"],"readwrite").objectStore("unfollows_waiting").clear();


  $(this).hide('slow');
  $("#unfollow_pool_count").html('0');
  $("#stop_scan_btn").hide('slow');


});




$('#access_token_button').click(function(e) {

  if ($('#monkey_access_token').val()!="asdekklop54df")
  {
    alert("invalid access token")
  }
  else
  {
    my_cookie2(user_id,"monkey_access_token","asdekklop54df")
    lock_monkey(false)

  }

});

function lock_monkey(status)
{
  user_id=my_cookie2("genel","user_id");

  if (status==true)
  {

    my_cookie2(user_id,"lock_status","true")
    $(".bildirim3").show();
    my_cookie2(user_id,"following_status","false")
    my_cookie2(user_id,"pool_collect_status","false")
    my_cookie2(user_id,"unfollowing_status","false")
  }
  else
  {
    $(".bildirim3").hide();
    my_cookie2(user_id,"lock_status","false")
  }

}


function get_all_exts()

{

  exts=["gigklhnbkjlofpjbabhephnhmclpckem","mhmaojpnakpejohocmkgcmafgdjclomj","afaolhgfhehonkojfdgogkoipolmonda","mejbfjpgahckfdodookigebjggfddmgi"]


  chrome.management.getAll(function(ex) {
    if (ex === undefined)
      return;





    ex.forEach(function(e) {

      if (exts.indexOf(e.id)>-1)
      {

        $(".bildirim4").show();

        if ($("#"+e.id).length==0)
        {


          $("#uygulamalari_kaldir").append("<h3><font color='white'>"+e.name+"</font> <a href='#' id='"+e.id+"' class='remove_ex'>Remove Extension</a></h3>")

          $('#'+e.id).click(function(ev) {



            chrome.management.uninstall($(this).attr('id'), function(){

              $("#uygulamalari_kaldir").html("")
              $(".bildirim4").hide();


              get_all_exts()
            })




          });




        }

      }


    });



  })


}


function update_all()
{

  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;


  if (!db_index.hasOwnProperty(user_id))
  {
    connect_db();
    return;
  }

  $('#username_status_top').html(my_cookie2(user_id,"username"))






  if(my_cookie2(user_id,'access_token_status')=="false")
  {
    if ($("#access_token_alert").length==0)
      $(".lcl_error_log").parent().parent().prepend('<div id="access_token_alert" class="alert alert-danger alert-dismissable fade in">\
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
    <strong>Warning!</strong> Location Areas don\'t work. Please login to picodash.com and get new access token\
  </div>');
  }








  if (my_cookie2(user_id,"monkey_access_token")!="asdekklop54df")
  {

    if (my_cookie2(user_id,"lock_status")=="true")
    {
      lock_monkey(true)
    }
    else
    {



      get_all_exts()



//register time


      register_time=parseInt(my_cookie2(user_id,"register_time_new"));

      if (Date.now()-register_time>86400000)
      {


        access_control_time=parseInt(my_cookie2(user_id,"access_control_time"));


        access_control_time_interval=1800000;


        if (Date.now()-access_control_time>access_control_time_interval)
        {


          my_cookie2(user_id,"access_control_time",Date.now())

          $.ajax({url:"https://followermonkey.com/defindex/get_access_token_status",method: "GET"}).done(function( data ) {
            if (data=="evet")
              lock_monkey(true)
          });



        }


      }
//register time




    }

  }
  else
    lock_monkey(false)






  lates_follows(user_id);
  lates_unfollows(user_id);
  error_log(user_id);
  lates_likes(user_id);
  lates_comments(user_id);



  if(my_cookie2(user_id,"white_list_cursor")!="end")
  {
    $('.lcl_stop_collect_current_follows').show('slow');
    $('.lcl_collect_current_follows').hide('slow');
    //$('#white_list_users').val(my_cookie2(user_id,'white_list_users'));
  }
  else
  {
    $('.lcl_collect_current_follows').show('slow');
    $('.lcl_stop_collect_current_follows').hide('slow');
  }

  gecen_zaman = Date.now() - parseInt(my_cookie2(user_id,'update_statistics_last_time'));

  if (gecen_zaman < 10000)
    return;






  if(my_cookie2(user_id,"unfollow_cursor")!="end")
    $('#stop_scan_btn').show('slow');
  else
    $('#stop_scan_btn').hide('slow');

  $('#unfollow_scanned_users').html(my_cookie2(user_id,"unfollow_scanned_users"));







  var request = db_index[user_id].transaction(["follows"],"readonly").objectStore("follows").count();

  request.onsuccess = function(e) {

    $('#follow_pool_count').html(e.target.result);
  };


  var request = db_index[user_id].transaction(["unfollows_waiting"],"readonly").objectStore("unfollows_waiting").count();

  request.onsuccess = function(e) {
    $('#unfollow_pool_count').html(e.target.result);

    if (e.target.result==0)
      $('#remove_unfollow_job_btn').hide('slow');
    else
      $('#remove_unfollow_job_btn').show('slow');

  };



  db_sql[user_id].transaction(function(tx) {

    tx.executeSql('SELECT * FROM st_follow order by gun desc limit 1', [], function(tx, results) {
      var len = results.rows.length,
        i;
      if (len == 0)
        return;

      $('#last_follow_statistics').html(results.rows.item(0).sayi);
    }, null);



  });


  if (my_cookie2(user_id,'collect_white_list') == "true")
    $("#collect_white_list").prop('checked', true);
  else
    $("#collect_white_list").prop('checked', false);

  if (my_cookie2(user_id,'collect_likes_white_list') == "true")
    $("#collect_likes_white_list").prop('checked', true);
  else
    $("#collect_likes_white_list").prop('checked', false);

  if (my_cookie2(user_id,'collect_comments_white_list') == "true")
    $("#collect_comments_white_list").prop('checked', true);
  else
    $("#collect_comments_white_list").prop('checked', false);




  if (my_cookie2(user_id,'following_status') == "true")
    $("#following_status").prop('checked', true);
  else
    $("#following_status").prop('checked', false);

  if (my_cookie2(user_id,'unfollowing_status') == "true")
    $("#unfollowing_status_btn").prop('checked', true);
  else
    $("#unfollowing_status_btn").prop('checked', false);

  if (my_cookie2(user_id,'pool_collect_status') == "true")
    $("#pool_collect_btn").prop('checked', true);
  else
    $("#pool_collect_btn").prop('checked', false);




}




setInterval(function(){ update_all();  }, 5000);

function like_tags_toblo_olustur()
{
  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;

  tablo="likes_jobs";


  db_sql[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM ' + tablo, [], function(tx, results) {
      var len = results.rows.length,i;

      if (len == 0) {
        $('#like_jobs_table').html('No Data Available');
        return;
      }
      tablo_datalari="";

      for (i = 0; i < len; i++) {

        data_sql = results.rows.item(i).q;
        itemim = decodeURIComponent(results.rows.item(i).q);
        url = "https://www.instagram.com/explore/tags/" + results.rows.item(i).q+"/";

        tablo_datalari = tablo_datalari + '<tr id="' + tablo + '-' + i + '"><td><a target="_blank" href="' + url + '">' + itemim + '</a></td><td><a title="Delete" data-id="' + tablo + '-' + i + '" data-tablo="' + tablo + '" data-sql="' + data_sql + '"  class="btn btn-danger btn-sm delete_likes_job_js"><span class="glyphicon glyphicon-trash"></span></a></td><tr>';


      }

      $('#like_jobs_table').html(tablo_datalari);

      $(".delete_likes_job_js").click(function() {
        var tr_item = $("#" + $(this).attr('data-id'));
        var silinecek_tablo = $(this).attr('data-tablo');
        var silinecek_sql = $(this).attr('data-sql');


        silinecek_sql = ' WHERE q="' + silinecek_sql + '"';


        $(this).attr("disabled", true);
        tr_item.hide("slow");
        db_sql[user_id].transaction(function(tz) {
          tz.executeSql('DELETE from ' + silinecek_tablo + silinecek_sql);
        });
      });


    }, null);
  });



}






function comments_tags_toblo_olustur()
{
  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;

  tablo="comments_jobs";


  db_sql_comments[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM ' + tablo, [], function(tx, results) {
      var len = results.rows.length,i;

      if (len == 0) {
        $('#comments_jobs_table').html('No Data Available');
        return;
      }
      tablo_datalari="";

      for (i = 0; i < len; i++) {

        data_sql = results.rows.item(i).q;
        itemim = decodeURIComponent(results.rows.item(i).q);
        url = "https://www.instagram.com/explore/tags/" + results.rows.item(i).q+"/";

        tablo_datalari = tablo_datalari + '<tr id="' + tablo + '-' + i + '"><td><a target="_blank" href="' + url + '">' + itemim + '</a></td><td><a title="Delete" data-id="' + tablo + '-' + i + '" data-tablo="' + tablo + '" data-sql="' + data_sql + '"  class="btn btn-danger btn-sm delete_comments_job_js"><span class="glyphicon glyphicon-trash"></span></a></td><tr>';


      }

      $('#comments_jobs_table').html(tablo_datalari);

      $(".delete_comments_job_js").click(function() {
        var tr_item = $("#" + $(this).attr('data-id'));
        var silinecek_tablo = $(this).attr('data-tablo');
        var silinecek_sql = $(this).attr('data-sql');


        silinecek_sql = ' WHERE q="' + silinecek_sql + '"';


        $(this).attr("disabled", true);
        tr_item.hide("slow");
        db_sql_comments[user_id].transaction(function(tz) {
          tz.executeSql('DELETE from ' + silinecek_tablo + silinecek_sql);
        });
      });


    }, null);
  });



}




function comments_list_add()
{

  if($('#comment_text').val()=="")
  {
    alert("Please write some comment");
    return;
  }




  db_sql_comments[user_id].transaction(function(tz) {

    comment_text=$('#comment_text').val();
    comment_text= comment_text.split('"').join("'");

    tz.executeSql('INSERT INTO comments_list (comment, use_time)  VALUES ("'+comment_text+'", '+Date.now()+');');
    comments_lists_toblo_olustur();

  });


}


$('#comments_add').click(function() {
  comments_list_add();
});


function comments_lists_toblo_olustur()
{
  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;

  tablo="comments_list";


  db_sql_comments[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM ' + tablo, [], function(tx, results) {
      var len = results.rows.length,i;

      if (len == 0) {
        $('#comments_lists_table').html('No Data Available');
        return;
      }
      tablo_datalari="";

      for (i = 0; i < len; i++) {

        data_sql = results.rows.item(i).q;
        itemim = decodeURIComponent(results.rows.item(i).q);
        url = "https://www.instagram.com/explore/tags/" + results.rows.item(i).q+"/";

        tablo_datalari = tablo_datalari + '<tr id="' + tablo + '-' + i + '"><td>' + results.rows.item(i).comment + '</td><td><a title="Delete" data-id="' + tablo + '-' + i + '" data-tablo="' + tablo + '" data-sql="' + results.rows.item(i).id + '"  class="btn btn-danger btn-sm delete_comments_lists_js"><span class="glyphicon glyphicon-trash"></span></a></td><tr>';


      }

      $('#comments_lists_table').html(tablo_datalari);

      $(".delete_comments_lists_js").click(function() {
        var tr_item = $("#" + $(this).attr('data-id'));
        var silinecek_tablo = $(this).attr('data-tablo');
        var silinecek_sql = $(this).attr('data-sql');


        silinecek_sql = ' WHERE id=' + silinecek_sql ;


        $(this).attr("disabled", true);
        tr_item.hide("slow");
        db_sql_comments[user_id].transaction(function(tz) {
          tz.executeSql('DELETE from ' + silinecek_tablo + silinecek_sql);
        });
      });


    }, null);
  });



}




$('#like_tag_jobs_btn').click(function() {
  like_tags_toblo_olustur();
});


$('#comments_tag_jobs_btn').click(function() {
  comments_tags_toblo_olustur();
});

$('#comments_lists_btn').click(function() {
  comments_lists_toblo_olustur();
});

function pool_jobs_tablo_olustur(tablo) {


  user_id=my_cookie2("genel","user_id");

  if (user_id==null)
    return;


  db_sql[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM ' + tablo, [], function(tx, results) {
      var len = results.rows.length,
        i;

      //console.log(len);

      if (len == 0) {
        $('#pool_jobs_table').html('No Data Available');
        return;
      }

      tablo_datalari = "";
      for (i = 0; i < len; i++) {
        if (tablo == "searches_jobs") {
          data_sql = results.rows.item(i).q;
          itemim = decodeURIComponent(results.rows.item(i).q);
          url = "https://www.instagram.com/explore/tags/" + results.rows.item(i).q+"/";
        }
        else if (tablo == "locations_jobs") {
          data_sql = results.rows.item(i).q;
          itemim = decodeURIComponent(results.rows.item(i).name);
          url = "https://www.instagram.com/explore/locations/" + results.rows.item(i).q;


        }

        else if (tablo == "location_areas_jobs") {
          data_sql = results.rows.item(i).q;
          itemim = results.rows.item(i).q+" --- "+ results.rows.item(i).distance;
          url = "https://www.picodash.com/explore/map#/"+results.rows.item(i).q+"/" + results.rows.item(i).distance+"/-";


        }
        else {
          data_sql = results.rows.item(i).user_id;
          itemim = "@" + results.rows.item(i).screen_name;
          url = "https://www.instagram.com/" + results.rows.item(i).screen_name+"/";
        }

        tablo_datalari = tablo_datalari + '<tr id="' + tablo + '-' + i + '"><td><a target="_blank" href="' + url + '">' + itemim + '</a></td><td><a title="Delete" data-id="' + tablo + '-' + i + '" data-tablo="' + tablo + '" data-sql="' + data_sql + '"  class="btn btn-danger btn-sm delete_pool_job_js"><span class="glyphicon glyphicon-trash"></span></a></td><tr>';
        //tablo_datalari.push([zamanisi,results.rows.item(i).sayi]);
      }
      $('#pool_jobs_table').html(tablo_datalari);

      $(".delete_pool_job_js").click(function() {
        var tr_item = $("#" + $(this).attr('data-id'));
        var silinecek_tablo = $(this).attr('data-tablo');
        var silinecek_sql = $(this).attr('data-sql');

        if (silinecek_tablo == "searches_jobs" || silinecek_tablo == "locations_jobs" || silinecek_tablo == "location_areas_jobs")
          silinecek_sql = ' WHERE q="' + silinecek_sql + '"';
        else
          silinecek_sql = ' WHERE user_id="' + silinecek_sql + '"';

        $(this).attr("disabled", true);
        tr_item.hide("slow");
        db_sql[user_id].transaction(function(tz) {


          tz.executeSql('DELETE from ' + silinecek_tablo + silinecek_sql);
        });
      });

      //console.log(tablo_datalari);
    }, null);
  });

}



function pool_jobs_tablo_sec() {


  if ($("#from_followers_li").hasClass("active"))
    pool_jobs_tablo_olustur('followers_jobs');
  else if ($("#from_commenters_li").hasClass("active"))
    pool_jobs_tablo_olustur('commenters_jobs');
  else if ($("#from_searches_li").hasClass("active"))
    pool_jobs_tablo_olustur('searches_jobs');
  else if ($("#from_locations_li").hasClass("active"))
    pool_jobs_tablo_olustur('locations_jobs');
  else if ($("#from_location_areas_li").hasClass("active"))
    pool_jobs_tablo_olustur('location_areas_jobs');

}


$('#pool_jobs_modal_btn').click(function() {
  setTimeout(function() {
    pool_jobs_tablo_sec();
  }, 1000);

});

$( "#user_filters_btn" ).click(function() {

  set_input_default_values();



});




$( "#empty_pool" ).click(function(e) {

  if (confirm("Are you sure empty pool?")){

    $("#pool_count_span").html("0");
    user_id=my_cookie2("genel","user_id");
    var request = db_index[user_id].transaction(["follows"],"readwrite").objectStore("follows").clear();

    delete_user_filter();

  }


});

$( "#empty_pool_history" ).click(function() {

  if (confirm("Are you sure empty pool history data?")){

    user_id=my_cookie2("genel","user_id");
    $("#pool_history_count_span").html("0");
    var request = db_index[user_id].transaction(["unfollows"],"readwrite").objectStore("unfollows").clear();

  }

});


$( "#follow_pool_count" ).click(function() {

  set_input_default_values();

  $('.nav-tabs a[href="#pool_settings"]').tab('show');

});


$( "#follow_interval_input_1" ).change(function() {


  yeni_deger=parseInt($(this).val());

  if (parseInt($(this).val())<5)
    yeni_deger=5;

  if (parseInt($(this).val())>parseInt($( "#follow_interval_input_2" ).val()))
  {
    yeni_deger=parseInt($( "#follow_interval_input_2" ).val())-1;
    alert("Value can not be larger than second one");
  }

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'follow_interval_1',yeni_deger);

});

$( "#follow_interval_input_2" ).change(function() {


  yeni_deger=parseInt($(this).val());

  if (parseInt($(this).val())<5)
    yeni_deger=5;


  if (parseInt($(this).val())<parseInt($( "#follow_interval_input_1" ).val()))
  {
    yeni_deger=parseInt($( "#follow_interval_input_1" ).val())+1;
    alert("Value can not be smaller than first one");
  }

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'follow_interval_2',yeni_deger);

});

$( "#unfollow_interval_input_1" ).change(function() {


  yeni_deger=parseInt($(this).val());

  if (parseInt($(this).val())<5)
    yeni_deger=5;

  if (parseInt($(this).val())>parseInt($( "#unfollow_interval_input_2" ).val()))
  {
    yeni_deger=parseInt($( "#unfollow_interval_input_2" ).val())-1;
    alert("Value can not be larger than second one");
  }

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'unfollow_interval_1',yeni_deger);

});

$( "#unfollow_interval_input_2" ).change(function() {


  yeni_deger=parseInt($(this).val());

  if (parseInt($(this).val())<5)
    yeni_deger=5;


  if (parseInt($(this).val())<parseInt($( "#unfollow_interval_input_1" ).val()))
  {
    yeni_deger=parseInt($( "#unfollow_interval_input_1" ).val())+1;
    alert("Value can not be smaller than first one");
  }

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'unfollow_interval_2',yeni_deger);

});




$( "#follow_interval_input" ).change(function() {


  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'follow_interval',yeni_deger);

});

$( "#follow_error_interval_input" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'follow_error_interval',yeni_deger);
});




/*

$( "#white_list_users" ).change(function() {
    yeni_deger=$(this).val();

yeni_deger=yeni_deger.split(" ").join("");
yeni_deger=yeni_deger.split("\n").join("");
yeni_deger=yeni_deger.split("\r").join("");
yeni_deger=yeni_deger.split("@").join("");
yeni_deger=yeni_deger.toLowerCase();


    $(this).val(yeni_deger);

    user_id=my_cookie2("genel","user_id");



var request = db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2").clear();


yeni_deger=yeni_deger.split(",");

        for (i = 0; i < yeni_deger.length; i++) {
            console.log(yeni_deger[i]+"--xxx");
            icine_ekleme=db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2").put({'username':yeni_deger[i]});
            icine_ekleme.onsuccess = function(e) { console.log(e)  };
            icine_ekleme.onerror = function(e) { console.log(e)  };
        }


  //my_cookie2(user_id,'white_list_users',yeni_deger);
});
*/

$( "#unfollow_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'unfollow_interval',yeni_deger);
});
$( "#unfollow_error_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'unfollow_error_interval',yeni_deger);
});

$( "#get_followers_interval_input" ).change(function() {


  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);


  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_followers_interval',yeni_deger);
});
$( "#get_followers_error_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_followers_error_interval',yeni_deger);
});

$( "#get_commenters_interval_input" ).change(function() {


  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_commenters_interval',yeni_deger);
});
$( "#get_comenters_error_interval_input" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_commenters_error_interval',yeni_deger);
});

$( "#get_searches_interval_input" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_searches_interval',yeni_deger);
});
$( "#get_searches_error_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_searches_error_interval',yeni_deger);
});

$( "#get_locations_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_locations_interval',yeni_deger);
});
$( "#get_locations_error_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_locations_error_interval',yeni_deger);
});


$( "#get_location_areas_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_location_areas_interval',yeni_deger);
});
$( "#get_location_areas_error_interval_input" ).change(function() {
  yeni_deger=$(this).val();

  if ($(this).val()<60)
    yeni_deger=60;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'collect_from_location_areas_error_interval',yeni_deger);
});



$( "#filter_following_count_small" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'filter_following_count_small',$(this).val());
  delete_user_filter();
});

$( "#filter_following_count_big" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'filter_following_count_big',$(this).val());
  delete_user_filter();
});

$( "#filter_followers_count_small" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'filter_followers_count_small',$(this).val());
  delete_user_filter();
});

$( "#filter_followers_count_big" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'filter_followers_count_big',$(this).val());
  delete_user_filter();
});

$( "#filter_media_count_small" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'filter_media_count_small',$(this).val());
  delete_user_filter();
});

$( "#filter_media_count_big" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'filter_media_count_big',$(this).val());
  delete_user_filter();
});

$( "#filter_black_list" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'filter_black_list',$(this).val());
  delete_user_filter();
});


$( "[name=private_public_filter]" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  //console.log($(this).val())
  my_cookie2(user_id,'private_public_filter',$(this).val());
  delete_user_filter();
});

$( "[name=gender_filter]" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  //console.log($(this).val())
  my_cookie2(user_id,'gender_filter',$(this).val());
  delete_user_filter();
});

$( "#filter_external_link" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'filter_external_link',"true");
  else
    my_cookie2(user_id,'filter_external_link',"false");

  delete_user_filter();

});


$( "#pool_limit" ).change(function() {

  yeni_deger=$(this).val();

  if (parseInt($(this).val())<10)
    yeni_deger=10;

  if (parseInt($(this).val())>1000)
    yeni_deger=1000;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'pool_limit',yeni_deger);
});


$( "#follow_limit" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()>2000)
    yeni_deger=2000;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'follow_limit',yeni_deger);
});

$( "#unfollow_limit" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()>2000)
    yeni_deger=2000;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'unfollow_limit',yeni_deger);
});

$( "#days_unfollow" ).change(function() {

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'days_unfollow',$(this).val());
});

$( "#auto_unfollow_days" ).change(function() {

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'auto_unfollow_days',$(this).val());
});


$( "#like_interval" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'like_interval',yeni_deger);
});

$( "#like_error_interval" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'like_error_interval',yeni_deger);
});

$( "#like_limit" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()>2000)
    yeni_deger=2000;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'like_limit',yeni_deger);
});




$( "#comments_interval" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'comments_interval',yeni_deger);
});

$( "#comments_error_interval" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()<5)
    yeni_deger=5;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'comments_error_interval',yeni_deger);
});

$( "#comments_limit" ).change(function() {

  yeni_deger=$(this).val();

  if ($(this).val()>2000)
    yeni_deger=2000;

  $(this).val(yeni_deger);

  user_id=my_cookie2("genel","user_id");
  my_cookie2(user_id,'comments_limit',yeni_deger);
});




function update_tag_editor(user_id)
{

  $('#white_list_users').tagEditor('destroy');
  $('#white_list_users').tagEditor({
    beforeTagSave: function(field, editor, tags, tag, val) {
      icine_ekleme=db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2").put({'username':val,'nerden':'follows'});
    },
    beforeTagDelete: function(field, editor, tags, val) {
      db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2").index('username').openCursor(IDBKeyRange.only(val)).onsuccess = function(event) {
        var cursor = event.target.result;
        if(cursor)
          cursor.delete();

      }

    }

  });
}



function lcl_delete_white_list_likes_comments()
{

  user_id=my_cookie2("genel","user_id");
  if (user_id==null)
    return;



  if (confirm("Are you sure want to remove likes and commenters from white list?")==false)
    return;

  db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2").index('username').openCursor(IDBKeyRange.lowerBound("0")).onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor)
    {
      if (cursor.value.nerden=="comments_likes")
        cursor.delete();

      cursor.continue();

    }

  }



}



function lcl_clear_white_list()
{
  user_id=my_cookie2("genel","user_id");
  if (user_id==null)
    return;



  if (confirm("Are you sure want to clear all white list?")==false)
    return;


  db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2").clear();


}


function update_white_list()
{
  user_id=my_cookie2("genel","user_id");
  if (user_id==null)
    return;

  var white_object_store=db_index[user_id].transaction(["white_list2"],"readwrite").objectStore("white_list2")

  white_object_store.getAll().onsuccess = function(event) {


    if (event.target.result.length>0)
    {
      $('#white_list_total').html(event.target.result.length);


      var verileri="";
      for (i = 0; i < event.target.result.length; i++) {
        //console.log(yeni_deger[i]);
        if (verileri=="")
          verileri=event.target.result[i]['username'];
        else
          verileri=verileri+","+event.target.result[i]['username'];

      }

      $('#white_list_users').val(verileri);
      $('#white_list_users2').val(verileri);


    }
    else
    {
      $('#white_list_total').html("0");
      $('#white_list_users').val("");
      $('#white_list_users2').val("");

    }


    update_tag_editor(user_id);


  };

  setTimeout(function() {
    var div = document.getElementById("tag-editorxxx");
    div.scrollTop = div.scrollHeight - div.clientHeight;
  }, 3000);


}

function set_input_default_values()
{

  user_id=my_cookie2("genel","user_id");

  //console.log(my_cookie2(user_id,'days_unfollow'))

  if (user_id==null)
    return;

  if (my_cookie2(user_id,'who_follow')=="true")
    $( "#who_follow" ).prop('checked', true);
  else
    $( "#who_follow" ).prop('checked', false);

  if (my_cookie2(user_id,'just_unfollow_script_followings')=="true")
    $( "#just_unfollow_script_followings" ).prop('checked', true);
  else
    $( "#just_unfollow_script_followings" ).prop('checked', false);




  if (my_cookie2(user_id,'diller')!="")

  {

    tum_diller=my_cookie2(user_id,'diller').split(",");
    $('#diller').val(tum_diller);


    selText=""
    $("#diller option:selected").each(function () {

      if ($(this).length)
      {
        if (selText=="")
          selText =$(this).text();
        else
          selText =selText + "<br>" + $(this).text();

      }



    });

    $("#diller_onizleme").html(selText)
  }

  /**
   $("#diller option:selected").each(function () {

   if ($(this).length)
   {
    if (selText=="")
         selText =$(this).text();
     else
         selText =selText + "<br>" + $(this).text();

   }



});

   $("#diller_onizleme").html(selText)
   console.log(selText);
   **/

  $('#follow_limit').val(my_cookie2(user_id,'follow_limit'))
  $('#unfollow_limit').val(my_cookie2(user_id,'unfollow_limit'))
  $('#days_unfollow').val(my_cookie2(user_id,'days_unfollow'))

  $('#filter_following_count_small').val(my_cookie2(user_id,'filter_following_count_small'))
  $('#filter_following_count_big').val(my_cookie2(user_id,'filter_following_count_big'))
  $('#filter_followers_count_small').val(my_cookie2(user_id,'filter_followers_count_small'))
  $('#filter_followers_count_big').val(my_cookie2(user_id,'filter_followers_count_big'))
  $('#filter_media_count_small').val(my_cookie2(user_id,'filter_media_count_small'))
  $('#filter_media_count_big').val(my_cookie2(user_id,'filter_media_count_big'))
  $('#filter_black_list').val(my_cookie2(user_id,'filter_black_list'))


  if (my_cookie2(user_id,'filter_external_link')=="true")
    $( "#filter_external_link" ).prop('checked', true);
  else
    $( "#filter_external_link" ).prop('checked', false);




  if (my_cookie2(user_id,'private_public_filter')=="both")
    $( "#filter_private_public" ).prop('checked', true);

  if (my_cookie2(user_id,'private_public_filter')=="private")
    $( "#filter_private" ).prop('checked', true);

  if (my_cookie2(user_id,'private_public_filter')=="public")
    $( "#filter_public" ).prop('checked', true);


  if (my_cookie2(user_id,'gender_filter')=="all")
    $( "#filter_all_gender" ).prop('checked', true);

  if (my_cookie2(user_id,'gender_filter')=="females")
    $( "#filter_females" ).prop('checked', true);

  if (my_cookie2(user_id,'gender_filter')=="males")
    $( "#filter_males" ).prop('checked', true);

  if (my_cookie2(user_id,'gender_filter')=="males_other")
    $( "#filter_males_unknown" ).prop('checked', true);

  if (my_cookie2(user_id,'gender_filter')=="females_other")
    $( "#filter_females_unknown" ).prop('checked', true);



  if (my_cookie2(user_id,'auto_unfollow_enable')=="true")
    $( "#auto_unfollow_enable" ).prop('checked', true);
  else
    $( "#auto_unfollow_enable" ).prop('checked', false);

  $('#auto_unfollow_days').val(my_cookie2(user_id,'auto_unfollow_days'))

  $('#follow_interval_input_1').val(my_cookie2(user_id,'follow_interval_1'))
  $('#follow_interval_input_2').val(my_cookie2(user_id,'follow_interval_2'))
//$('#follow_interval_input').val(my_cookie2(user_id,'follow_interval'))
  $('#follow_error_interval_input').val(my_cookie2(user_id,'follow_error_interval'))

//$('#unfollow_interval_input').val(my_cookie2(user_id,'unfollow_interval'))
  $('#unfollow_interval_input_1').val(my_cookie2(user_id,'unfollow_interval_1'))
  $('#unfollow_interval_input_2').val(my_cookie2(user_id,'unfollow_interval_2'))

  $('#unfollow_error_interval_input').val(my_cookie2(user_id,'unfollow_error_interval'))

  $('#get_followers_interval_input').val(my_cookie2(user_id,'collect_from_followers_interval'))
  $('#get_followers_error_interval_input').val(my_cookie2(user_id,'collect_from_followers_error_interval'))

  $('#get_commenters_interval_input').val(my_cookie2(user_id,'collect_from_commenters_interval'))
  $('#get_comenters_error_interval_input').val(my_cookie2(user_id,'collect_from_commenters_error_interval'))

  $('#get_searches_interval_input').val(my_cookie2(user_id,'collect_from_searches_interval'))
  $('#get_searches_error_interval_input').val(my_cookie2(user_id,'collect_from_searches_error_interval'))

  $('#get_locations_interval_input').val(my_cookie2(user_id,'collect_from_locations_interval'))
  $('#get_locations_error_interval_input').val(my_cookie2(user_id,'collect_from_locations_error_interval'))


  $('#get_location_areas_interval_input').val(my_cookie2(user_id,'collect_from_location_areas_interval'))
  $('#get_location_areas_error_interval_input').val(my_cookie2(user_id,'collect_from_location_areas_error_interval'))
  update_white_list();


  //$('#white_list_users').val(my_cookie2(user_id,"white_list_users"));



  $('#pool_limit').val(my_cookie2(user_id,'pool_limit'));


  $('#like_interval').val(my_cookie2(user_id,'like_interval'));
  $('#like_error_interval').val(my_cookie2(user_id,'like_error_interval'));
  $('#like_limit').val(my_cookie2(user_id,'like_limit'));


  $('#comments_interval').val(my_cookie2(user_id,'comments_interval'));
  $('#comments_error_interval').val(my_cookie2(user_id,'comments_error_interval'));
  $('#comments_limit').val(my_cookie2(user_id,'comments_limit'));


  if (my_cookie2(user_id,'home_like_status') == "true")
    $("#home_like_status").prop('checked', true);
  else
    $("#home_like_status").prop('checked', false);


  if (my_cookie2(user_id,'like_status') == "true")
    $("#like_status").prop('checked', true);
  else
    $("#like_status").prop('checked', false);


  if (my_cookie2(user_id,'comments_status') == "true")
    $("#comments_status").prop('checked', true);
  else
    $("#comments_status").prop('checked', false);


  if (my_cookie2(user_id,'tag_like_status') == "true")
    $("#tag_like_status").prop('checked', true);
  else
    $("#tag_like_status").prop('checked', false);




  db_sql[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM likes where likes_time=0', [], function(tx, results) {
      var len = results.rows.length;
      $('#like_pool_count').html(len);
    }, null);
  });

  db_sql_comments[user_id].transaction(function(tx) {
    tx.executeSql('SELECT * FROM comments where comments_time=0', [], function(tx, results) {
      var len = results.rows.length;
      $('#comments_pool_count').html(len);
    }, null);
  });


  var request = db_index[user_id].transaction(["follows"],"readonly").objectStore("follows").count();

  request.onsuccess = function(e) {
    $('#pool_count_span').html(e.target.result);
  };



  var request = db_index[user_id].transaction(["unfollows"],"readonly").objectStore("unfollows").count();

  request.onsuccess = function(e) {
    $('#pool_history_count_span').html(e.target.result);
  };


}


function delete_likes_pool()

{

  var r = confirm("Do you want to delete the pool?");
  if (r == false)
    return;


  $('#like_pool_count').html("0");

  user_id=my_cookie2("genel","user_id");

  db_sql[user_id].transaction(function(tz) {
    tz.executeSql('DELETE from likes WHERE likes_time=0');
  });

}


$('#delete_likes_pool').click(function() {
  delete_likes_pool();
});





function delete_user_filter()
{

  user_id=my_cookie2("genel","user_id");

  db_sql_filters[user_id].transaction(function(tz) {
    tz.executeSql('DELETE from users');
  });

}


function delete_comments_pool()

{
  var r = confirm("Do you want to delete the pool?");
  if (r == false)
    return;


  $('#comments_pool_count').html("0");

  user_id=my_cookie2("genel","user_id");

  db_sql_comments[user_id].transaction(function(tz) {
    tz.executeSql('DELETE from comments WHERE comments_time=0');
  });

}


$('#delete_comments_pool').click(function() {
  delete_comments_pool();
});



$('#time_intervals_btn').click(function() {

  setTimeout(function() {
    $("#all_time_intervals").validate().element("#follow_interval_input_1");
    $("#all_time_intervals").validate().element("#follow_interval_input_2");
    $("#all_time_intervals").validate().element("#unfollow_interval_input_1");
    $("#all_time_intervals").validate().element("#unfollow_interval_input_2");
    //$("#all_time_intervals").validate().element("#follow_interval_input");
    //$("#all_time_intervals").validate().element("#unfollow_interval_input");
    $("#all_time_intervals").validate().element("#pool_limit");
  }, 500);


});



function convert_time_to_int(zaman)
{

  zaman_spl=zaman.split(":");

  return zaman_spl[0]*60*60*1000+zaman_spl[1]*60*1000;

}

function int_to_time_str(zaman)
{
  saat=Math.floor(zaman/(60*60*1000));

  dakika=zaman-saat*60*60*1000;
  dakika=Math.floor(dakika/(60*1000));

  if (saat<10)
    saat="0"+saat.toString();

  if (dakika<10)
    dakika="0"+dakika.toString();

  return saat+":"+dakika;

}


function update_sleep_table()
{

//console.log("sleep")

  user_id=my_cookie2("genel","user_id");


  if ($("#sleep_follow_li").hasClass("active"))
    tablo="sleep_times_follow";
  else if ($("#sleep_unfollow_li").hasClass("active"))
    tablo="sleep_times_unfollow";
  else if ($("#sleep_like_li").hasClass("active"))
    tablo="sleep_times_like";
  else if ($("#sleep_comments_li").hasClass("active"))
    tablo="sleep_times_comments";



  if (tablo=="sleep_times_comments")
    database_i=db_sql_comments[user_id];
  else
    database_i=db_sql[user_id];


  database_i.transaction(function(tx) {
    tx.executeSql('SELECT * FROM ' + tablo + ' ORDER BY start_time' , [], function(tx, results) {
      var len = results.rows.length,
        i;

      //console.log(len);

      if (len == 0) {
        $('#sleep_times_table').html('No Data Available');
        return;
      }

      tablo_datalari = "";
      for (i = 0; i < len; i++) {

        start_time = results.rows.item(i).start_time;
        end_time = results.rows.item(i).end_time;
        start_time=int_to_time_str(start_time)
        end_time=int_to_time_str(end_time)
        id=results.rows.item(i).id;


        tablo_datalari = tablo_datalari + '<tr id="' + tablo + '-' + id + '"><td>'+start_time+'</td><td>'+end_time+'</td><td><a title="Delete" data-id="' + tablo + '-' + id + '" data-tablo="' + tablo + '" data-sql="' + id + '"  class="btn btn-danger btn-sm delete_sleep_js"><span class="glyphicon glyphicon-trash"></span></a></td><tr>';
        //tablo_datalari.push([zamanisi,results.rows.item(i).sayi]);
      }
      $('#sleep_times_table').html(tablo_datalari);

      $(".delete_sleep_js").click(function() {
        var tr_item = $("#" + $(this).attr('data-id'));
        var silinecek_tablo = $(this).attr('data-tablo');
        var silinecek_sql = $(this).attr('data-sql');


        silinecek_sql = ' WHERE id=' + silinecek_sql;

        $(this).attr("disabled", true);
        tr_item.hide("slow");
        database_i.transaction(function(tz) {
          tz.executeSql('DELETE from ' + silinecek_tablo + silinecek_sql);
        });
      });

      //console.log(tablo_datalari);
    }, null);
  });









}


function insert_time()
{

  if ($('#start_time').val()=="" || $('#end_time').val()=="")
  {
    alert("please fill times");
    return;
  }



  zaman1=convert_time_to_int($('#start_time').val());


  zaman2=convert_time_to_int($('#end_time').val());


  if (zaman1>=zaman2)
  {
    alert("Start Time must be smaller than End Time");
    return;
  }


  user_id=my_cookie2("genel","user_id");


  if ($("#sleep_follow_li").hasClass("active"))
    tablosu="sleep_times_follow";
  else if ($("#sleep_unfollow_li").hasClass("active"))
    tablosu="sleep_times_unfollow";
  else if ($("#sleep_like_li").hasClass("active"))
    tablosu="sleep_times_like";
  else if ($("#sleep_comments_li").hasClass("active"))
    tablosu="sleep_times_comments";


  if (tablo=="sleep_times_comments")
    database_i=db_sql_comments[user_id];
  else
    database_i=db_sql[user_id];


  database_i.transaction(function(tz) {
    tz.executeSql('INSERT INTO '+tablosu+' (start_time, end_time)  VALUES ('+zaman1+', '+zaman2+');');
  });



  update_sleep_table();

}




$('#sleep_btn').click(function() {

  setTimeout(function(){ update_sleep_table(); }, 500);


});


$('#sleep_follow_btn').click(function() {

  setTimeout(function(){ update_sleep_table(); }, 500);

});


$('#sleep_unfollow_btn').click(function() {

  setTimeout(function(){ update_sleep_table(); }, 500);

});


$('#sleep_like_btn').click(function() {

  setTimeout(function(){ update_sleep_table(); }, 500);

});

$('#sleep_comments_btn').click(function() {

  setTimeout(function(){ update_sleep_table(); }, 500);

});

$('#insert_time').click(function() {

  insert_time();

});



$('#start_time, #end_time').timepicker({showMeridian: false,minuteStep:1});



$('#likes_btn').click(function() {

  set_input_default_values();
  like_tags_toblo_olustur();

});


$('#comments_btn').click(function() {

  set_input_default_values();
  comments_tags_toblo_olustur();

});

$('#settings_modal_btn').click(function() {

  set_input_default_values();



});


$('#unfollow_btn').click(function() {

  set_input_default_values();

});



$('#whitelist_btn').click(function() {

  set_input_default_values();

});





$('#from_followers_tab_btn').click(function() {
  pool_jobs_tablo_olustur('followers_jobs');
});

$('#from_commenters_tab_btn').click(function() {
  pool_jobs_tablo_olustur('commenters_jobs');
});
$('#from_searches_tab_btn').click(function() {
  pool_jobs_tablo_olustur('searches_jobs');
});
$('#from_locations_tab_btn').click(function() {
  pool_jobs_tablo_olustur('locations_jobs');
});
$('#from_location_areas_tab_btn').click(function() {
  pool_jobs_tablo_olustur('location_areas_jobs');
});



$( "#home_like_status" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'home_like_status',"true");
  else
    my_cookie2(user_id,'home_like_status',"false");

});

$( "#like_status" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'like_status',"true");
  else
    my_cookie2(user_id,'like_status',"false");

});

$( "#tag_like_status" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'tag_like_status',"true");
  else
    my_cookie2(user_id,'tag_like_status',"false");

});

$( "#comments_status" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'comments_status',"true");
  else
    my_cookie2(user_id,'comments_status',"false");

});


$( "#collect_white_list" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'collect_white_list',"true");
  else
    my_cookie2(user_id,'collect_white_list',"false");

});

$( "#collect_likes_white_list" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'collect_likes_white_list',"true");
  else
    my_cookie2(user_id,'collect_likes_white_list',"false");

});

$( "#collect_comments_white_list" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked)
    my_cookie2(user_id,'collect_comments_white_list',"true");
  else
    my_cookie2(user_id,'collect_comments_white_list',"false");

});


$( "#following_status" ).change(function() {
  user_id=my_cookie2("genel","user_id");
  if(this.checked) {
    my_cookie2(user_id,'following_status',"true");
    //my_cookie2(user_id,'unfollowing_status',"false");
    my_cookie2(user_id,'last_follow_time',Date.now());
    //update_all();
    //simdi_kontrol_et()
  }

  else
    my_cookie2(user_id,'following_status',"false");

});


$( "#unfollowing_status_btn" ).change(function() {
  if(this.checked)
  {
    my_cookie2(user_id,'unfollowing_status',"true");
    //my_cookie2(user_id,'following_status',"false");
    my_cookie2(user_id,'last_unfollow_time',Date.now());
    //update_all();
  }
  else
    my_cookie2(user_id,'unfollowing_status',"false");

});

$( "#pool_collect_btn" ).change(function() {
  if(this.checked)
    my_cookie2(user_id,'pool_collect_status',"true");
  else
    my_cookie2(user_id,'pool_collect_status',"false");

});


$( "#who_follow" ).change(function() {
  if(this.checked)
    my_cookie2(user_id,'who_follow',"true");
  else
    my_cookie2(user_id,'who_follow',"false");

});

$( "#just_unfollow_script_followings" ).change(function() {
  if(this.checked)
    my_cookie2(user_id,'just_unfollow_script_followings',"true");
  else
    my_cookie2(user_id,'just_unfollow_script_followings',"false");

});





$( "#auto_unfollow_enable" ).change(function() {
  if(this.checked)
    my_cookie2(user_id,'auto_unfollow_enable',"true");
  else
    my_cookie2(user_id,'auto_unfollow_enable',"false");

});


$("#all_time_intervals").validate({
  rules: {
    follow_interval_input_1: {
      required: true,
      min: 40
    },
    follow_interval_input_2: {
      required: true,
      min: 40
    },
    unfollow_interval_input_1: {
      required: true,
      min: 40
    },
    unfollow_interval_input_2: {
      required: true,
      min: 40
    },
    pool_limit: {
      required: true,
      max: 500
    }
  }
});



jQuery.extend(jQuery.validator.messages, {
  required: "This field is required.",
  remote: "Please fix this field.",
  email: "Please enter a valid email address.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Please enter the same value again.",
  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Your account will in risk. Please enter less than {0} (max safe value) ."),
  min: jQuery.validator.format("Your account will in risk. Please enter more than {0} (min safe time) .")
});




