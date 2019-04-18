
var $$ = Dom7;
//var mainView = app.views.create('.view-main', { path: '/'});


function setActiveTab(tab){
	
	switch(tab){
		case 1:
			$$('.tab-link').removeClass('tab-link-active');
			$$('.tstu-tab-news').addClass('tab-link-active');
		break;
		case 2: 
			$$('.tab-link').removeClass('tab-link-active');
			$$('.tstu-tab-abitur').addClass('tab-link-active');
		break;
		case 3:
			$$('.tab-link').removeClass('tab-link-active');
			$$('.tstu-tab-notif').addClass('tab-link-active');
		break;
		case 4:
			$$('.tab-link').removeClass('tab-link-active');
			$$('.tstu-tab-user').addClass('tab-link-active');
		break;
		default:	
			$$('.tab-link').removeClass('tab-link-active');
			$$('.tstu-tab-news').addClass('tab-link-active');
	}
}

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'ТГТУ',
  // App id
  id: 'com.myapp.tstu',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
   template7Pages: true,
	precompileTemplates: true, 
	routes: [
	{
		path: '/',
		componentUrl: './pages/home.html',
	},
	{
	  path: '/abitur/',
	  componentUrl: './pages/abitur.html',
	}, 
	{
	  path: '/nnews/:id/',
	  componentUrl: './pages/nnews.html',
	},  
	//Абитуриентам направления
	{
	  path: '/abitur-n/bak/',
	  componentUrl: './pages/abitur/napr/bak.html',
	},
	{
	  path: '/abitur-n/dip/',
	  componentUrl: './pages/abitur/napr/dip.html',
	},
	{
	  path: '/abitur-n/mag/',
	  componentUrl: './pages/abitur/napr/mag.html',
	},
	{
	  path: '/abitur-n/spo/',
	  componentUrl: './pages/abitur/napr/spo.html',
	},
	{
	  path: '/abitur-n/asp/',
	  componentUrl: './pages/abitur/napr/asp.html',
	},
	//Абитуриентам документы
	{
	  path: '/abitur/bsm/',
	  componentUrl: './pages/abitur/doc/bsm.html',
	},
	{
	  path: '/abitur/so/',
	  componentUrl: './pages/abitur/doc/so.html',
	},
	{
	  path: '/abitur/spo/',
	  componentUrl: './pages/abitur/doc/spo.html',
	},
	{
	  path: '/abitur/asp/',
	  componentUrl: './pages/abitur/doc/asp.html',
	},
	{
	  path: '/abitur-n/:who/:napr/:nnapr/',
	  	popup: {
      		componentUrl: './pages/abitur/napr/{{who}}/{{napr}}.html'
    	},
	},
	//профиль
	{
	  path: '/user/',
	  componentUrl: './pages/user.html',
	},	
	//профиль
	{
	  path: '/user/usp',
	  componentUrl: './pages/user/usp.html',
	},	
	{
	  path: '/user/rasp',
	  componentUrl: './pages/user/rasp.html',
	},	
],
});

var mainView = app.views.create('.view-main', {
  url: '/'
})
app.on('pageInit', function (page) {
  $$('.tstu-toolbar').append('\
	<div class="toolbar-inner" id="tstu-toolbar-inner">\
			<a href="/" class="tab-link tstu-tab-news"><span class="tabbar-label"><i class="icon f7-icons">list</i>Новости</span> </a>\
			<a href="/abitur/" class="tab-link tstu-tab-abitur"><i class="icon f7-icons">compass</i> <span class="tabbar-label">Абитуриентам</span> </a>\
			<a href="#" class="tab-link tstu-tab-notif"><i class="icon f7-icons">bell<span class="badge color-red">5</span></i> <span class="tabbar-label">Оповещения</span></a> \
			<a href="/user/" class="tab-link tstu-tab-user"> <i class="icon f7-icons">person</i> <span class="tabbar-label">Профиль</span> </a>\
	</div>');
	initPushwoosh();
});

/////
function initPushwoosh() {
	var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

  // Should be called before pushwoosh.onDeviceReady
  document.addEventListener('push-notification', function(event) {
		var notification = event.notification;
	      app.dialog.alert('Сообщение');
		// handle push open here
	});
  
	// Initialize Pushwoosh. This will trigger all pending push notifications on start.
	pushwoosh.onDeviceReady({
    appid: "3E661-4E835",
		projectid: "tstu-237409",
		//serviceName: "com.tstu.mobile"
	});
}
