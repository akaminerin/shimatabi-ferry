/** Server-side adapter contract. The static prototype uses matching demo data in app.js. */
export class OfficialStatusProvider {
  constructor({ routeId, endpoint, fetcher = fetch }) { Object.assign(this,{routeId,endpoint,fetcher}); }
  async getStatus(){
    const response=await this.fetcher(`${this.endpoint}?routeId=${this.routeId}`);
    if(!response.ok) throw new Error('STATUS_UNAVAILABLE');
    return normalize(await response.json(),this.routeId);
  }
}
export class IheyaStatusProvider extends OfficialStatusProvider { constructor(options){ super({...options,routeId:'iheya'}); } }
export class IzenaStatusProvider extends OfficialStatusProvider { constructor(options){ super({...options,routeId:'izena'}); } }
export class FerryStatusService {
  constructor({ mode = 'demo', providers = {} } = {}) { this.mode=mode; this.providers=providers; }
  getIheyaStatus(){ return this.getStatus('iheya'); }
  getIzenaStatus(){ return this.getStatus('izena'); }
  async getStatus(routeId){
    if(this.mode==='demo') return DEMO[routeId];
    try { return await this.providers[routeId].getStatus(); }
    catch { return {routeId,status:'unavailable',notice:'最新の運航情報を取得できませんでした',updatedAt:null,showOfficialLink:true}; }
  }
}
function normalize(value,routeId){return {routeId,status:value.status,updatedAt:value.updatedAt,notice:value.notice||'',scheduleChanges:value.scheduleChanges||[],extraSailings:value.extraSailings||[]}}
export const DEMO={iheya:{updatedAt:'07:15',status:'operating',departurePort:'運天港',departureTime:'11:00',arrivalPort:'前泊港',notice:'通常運航予定'},izena:{updatedAt:'07:30',status:'changed',departurePort:'運天港',departureTime:'10:30',arrivalPort:'仲田港',notice:'第2便変更（デモ）'}};

