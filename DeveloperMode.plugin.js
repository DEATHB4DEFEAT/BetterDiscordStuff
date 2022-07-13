/**
 * @name DeveloperMode
 * @author DEATHB4DEFEAT
 * @version 1.0.11
 * @description Improves the default icons next to statuses
 * @source https://github.com/DEATHB4DEFEAT/BetterDiscordStuff/DeveloperMode.js
 * @updateUrl https://raw.githubusercontent.com/BetterDiscordStuff/DeveloperMode.js
 * @invite 49KeKwXc8g
 */

module.exports = (() => {
	const config = {
		info: {
			name: 'DeveloperMode',
			authors: [
				{
					name: 'DEATHB4DEFEAT',
				},
			],
			version: '1.0.11',
			description: 'Makes you able to view the special Discord developer options.',
		},
	};

	return function () {
		function start() {
			window.___wp = function (e) {
				let id = e.c[Object.keys(e.c).find((k) => e.c[k]?.exports?.default?.isDeveloper === false)];
				if (id) Object.defineProperty(id.exports.default, 'isDeveloper', { get: () => true });
				delete window.___wp;
			};
			webpackChunkdiscord_app.push([['wp_isdev_patch'], {}, window.___wp]);
		}
        function stop() {}
        this.start = start;
        this.stop = stop;
	};
})();
