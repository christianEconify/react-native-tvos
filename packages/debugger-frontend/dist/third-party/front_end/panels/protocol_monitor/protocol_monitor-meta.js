import*as o from"../../core/i18n/i18n.js";import"../../core/root/root.js";import*as t from"../../ui/legacy/legacy.js";const r={protocolMonitor:"Protocol monitor",showProtocolMonitor:"Show Protocol monitor"},i=o.i18n.registerUIStrings("panels/protocol_monitor/protocol_monitor-meta.ts",r),n=o.i18n.getLazilyComputedLocalizedString.bind(void 0,i);let e;t.ViewManager.registerViewExtension({location:"drawer-view",id:"protocol-monitor",title:n(r.protocolMonitor),commandPrompt:n(r.showProtocolMonitor),order:100,persistence:"closeable",loadView:async()=>new((await async function(){return e||(e=await import("./protocol_monitor.js")),e}()).ProtocolMonitor.ProtocolMonitorImpl),experiment:"protocol-monitor"});
