var app = new Moon({
  root: "#app",
  data: {
    databases: []
  }
});

perfMonitor.startFPSMonitor();
perfMonitor.startMemMonitor();
perfMonitor.initProfiler("render");

function run() {
  app.set("databases", ENV.generateData().toArray());
  perfMonitor.startProfile("render");
  Moon.nextTick(function() {
    perfMonitor.endProfile("render");
    renderRate.ping();
  });
  setTimeout(run, ENV.timeout);
}

run();
