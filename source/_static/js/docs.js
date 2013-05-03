(function($) {


var Docs = Garnish.Base.extend({

	$container: null,
	$main: null,
	$sidebar: null,
	$sidebarNav: null,
	$sidebarNavPlaceholder: null,
	$altSidebar: null,
	$altSidebarNavBtn: null,
	$altSidebarNavMenu: null,
	$chatbarContainer: null,

	showingSidebar: true,
	fixedSidebarNav: false,

	init: function()
	{
		// Find all the key elements
		this.$container = $('#container');
		this.$main = $('#main');
		this.$sidebar = $('#sidebar');
		this.$sidebarNav = this.$sidebar.children('nav');
		this.$chatbarContainer = $('#chatbar-container');

		this.$container.css('min-height', this.$sidebarNav.outerHeight());

		this.addListener(Garnish.$win, 'resize', 'onWindowResize');
		this.onWindowResize();

		this.addListener(Garnish.$win, 'scroll', 'onWindowScroll');
		this.onWindowScroll();

		this.$chatbarContainer.load('http://buildwithcraft.com/chatbar');
	},

	/**
	 * Handles stuff that should happen when the window is resized.
	 */
	onWindowResize: function()
	{
		// Get the new window width
		this.onWindowResize._docsWidth = Math.min(Garnish.$win.width(), Docs.maxWidth);

		// Update the responsive sidebar
		this.updateResponsiveSidebar();
	},

	/**
	 * Updates the responsive sidebar
	 */
	updateResponsiveSidebar: function()
	{
		if (!this.$sidebar.length)
		{
			return;
		}

		if (this.onWindowResize._docsWidth < Docs.minSidebarWidth)
		{
			if (this.showingSidebar)
			{
				this.makeSidebarNavUnfixed();
				this.$main.removeClass(Docs.hasSidebarClass);

				/*
				if (!this.$altSidebar)
				{
					this.$altSidebar = $('<div id="sidebar-alt"/>').prependTo(this.$main);

					var $sidebarChildren = this.$sidebar.children();

					for (var i = 0; i < $sidebarChildren.length; i++)
					{
						var $elem = $($sidebarChildren[i]).clone(true);

						if ($elem.prop('nodeName') == 'NAV')
						{
							// Create a menu instead
							var selectedText = $elem.find('.current:first').text(),
								$list = $elem.children();

							this.$altSidebarNavBtn = $('<div class="btn menubtn">'+selectedText+'</div>').appendTo(this.$altSidebar);
							this.$altSidebarNavMenu = $('<div class="menu menulist"/>').appendTo(this.$altSidebar);

							$list.appendTo(this.$altSidebarNavMenu);
							new Garnish.MenuBtn(this.$altSidebarNavBtn);
							$elem.detach();
						}
						else
						{
							$elem.appendTo(this.$altSidebar);
						}
					}
				}
				else
				{
					this.$altSidebar.show();
				}
				*/

				this.$sidebar.hide();
				this.showingSidebar = false;
			}
		}
		else
		{
			if (!this.showingSidebar)
			{
				this.$main.addClass(Docs.hasSidebarClass);
				//this.$altSidebar.hide();
				this.$sidebar.show();
				this.showingSidebar = true;
				this.updateFixedSidebarNav();
			}
		}
	},

	/**
	 * Handle stuff that should happen when the window scrolls.
	 */
	onWindowScroll: function()
	{
		this.onWindowScroll._scrollTop = Garnish.$win.scrollTop();

		this.updateFixedSidebarNav();
	},

	updateFixedSidebarNav: function()
	{
		if (this.showingSidebar && this.$sidebarNav.length)
		{
			/*if (this.fixedSidebarNav)
			{
				this.onWindowScroll._$offsetTarget = this.$sidebarNavPlaceholder;
			}
			else
			{
				this.onWindowScroll._$offsetTarget = this.$sidebarNav;
			}*/

			if (this.onWindowScroll._scrollTop > this.$container.offset().top)
			{
				this.makeSidebarNavFixed();

				// Make sure that the nav doesn't bleed into the page footer
				//this.onWindowScroll._maxNavHeight = this.$container.offset().top + this.$container.outerHeight() - Garnish.$win.scrollTop();
				//this.$sidebarNav.css('max-height', this.onWindowScroll._maxNavHeight);
			}
			else
			{
				this.makeSidebarNavUnfixed();
			}
		}
	},

	makeSidebarNavFixed: function()
	{
		if (!this.fixedSidebarNav)
		{
			if (typeof $sidebarNavPlaceholder == 'undefined')
			{
				this.$sidebarNavPlaceholder = $('<div/>');
			}

			this.$sidebarNavPlaceholder.insertBefore(this.$sidebarNav);
			this.$sidebar.addClass('fixed');
			this.fixedSidebarNav = true;
		}
	},

	makeSidebarNavUnfixed: function()
	{
		if (this.fixedSidebarNav)
		{
			this.$sidebarNavPlaceholder.remove();
			this.$sidebar.removeClass('fixed');
			this.fixedSidebarNav = false;
		}
	}
},
{
	maxWidth: 1051, //1024,
	minSidebarWidth: 768,
	hasSidebarClass: 'has-sidebar'
});


window.docs = new Docs();


})(jQuery);
