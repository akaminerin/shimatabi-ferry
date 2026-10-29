/** Server-side adapter contract. The static prototype uses matching demo data in app.js. */
export class FerryStatusService {
  constructor({ mode = 'demo', fetcher = fetch, endpoint = '/api/ferry-status' } = {}) { Object.assign(this,{mode,fetcher,endpoint}); }
  getIheyaStatus(){ return this.getStatus('iheya'); }
  getIzenaStatus(){ return this.getStatus('izena'); }
  async getStatus(routeId){
    if(this.mode==='demo') return DEMO[routeId];
    const response=await this.fetcher(`${this.endpoint}?routeId=${encodeURIComponent(routeId)}`);
    if(!response.ok) throw new Error('最新の運航情報を取得できませんでした');
    return response.json();
  }
}
export const DEMO={iheya:{updatedAt:'07:15',status:'operating',departurePort:'運天港',departureTime:'11:00',arrivalPort:'前泊港',notice:'通常運航予定'},izena:{updatedAt:'07:30',status:'changed',departurePort:'運天港',departureTime:'10:30',arrivalPort:'仲田港',notice:'第2便変更（デモ）'}};

