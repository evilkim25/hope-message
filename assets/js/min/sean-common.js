function icon(){$(".right-write").hasClass("show")?$(".material-icons").text("clear"):$(".material-icons").text("add")}function displayChatMessage(e,t,a,s){function n(e){setTimeout(function(){$(".msg-card:nth-child("+e+")").addClass("fadeInUp")},300*e)}$("#messagesDiv").prepend('<div class="msg-card"><div class="title"><div class="pic"></div><h3 class="name">'+e+"<small>"+t+'</small></h3></div><div class="content"><p>'+a+'</p></div><div class="time"><time>'+s+"</time></div></div>");$("#messagesDiv")[0].scrollTop=$("#messagesDiv")[0].scrollHeight;for(var i=$(".msg-card"),l=0;l<=i.length;l++)n(l)}window.onload=function(){setTimeout(function(){$(".js-loading-mask").addClass("fadeOutUp").css("z-index","-1")},1500)},$(function(){$(".left-list").scroll(function(){var e=$(".left-list").scrollTop(),t=$(".left-list .top-header");e>=1?t.addClass("-shadow"):t.removeClass("-shadow")})}),$(function(){icon()}),$(".js-upright").click(function(e){e.preventDefault(),$(".right-write").toggleClass("show"),icon()}),$(".send-btngroup > .cancel").click(function(e){e.preventDefault(),$("#nameInput, #nicknameInput, #messageInput").val("")});var myDataRef=new Firebase("https://vivid-heat-4779.firebaseio.com/");$("#message").submit(function(e){e.preventDefault();var t=$("#nameInput").val(),a=$("#nicknameInput").val(),s=$("#messageInput").val(),n=new Date,i=n.getMonth()+1,l=n.getDate(),c=n.getHours(),o=n.getMinutes(),d=n.getFullYear()+"/"+((""+i).length<2?"0":"")+i+"/"+((""+l).length<2?"0":"")+l+"  "+((""+c).length<2?"0":"")+c+":"+((""+o).length<2?"0":"")+o;return""==$("#nameInput, #nicknameInput, #messageInput").val()?(alert("欄位皆為必填喔！"),!1):($(".refresh-wrap").addClass("-show"),void setTimeout(function(){$(".refresh-wrap").removeClass("-show"),myDataRef.push({name:t,nick:a,text:s,time:d}),$("#nameInput, #nicknameInput, #messageInput").val("")},2e3))}),myDataRef.on("child_added",function(e){var t=e.val();displayChatMessage(t.name,t.nick,t.text,t.time)});