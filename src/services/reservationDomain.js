/** 本番バックエンドで実装する境界。静的デモからは呼び出しません。 */
export const ReservationStatus={RESERVED:'reserved',PAID:'paid',BOARDED:'boarded',CANCELLED:'cancelled',SUSPENDED:'suspended',NO_SHOW:'no_show'};
export const QrStatus={UNUSED:'unused',USED:'used',CANCELLED:'cancelled',SUSPENDED:'suspended',EXPIRED:'expired'};
export const RefundStatus={NOT_REQUIRED:'not_required',ELIGIBLE:'eligible',REQUESTED:'requested',PROCESSING:'processing',COMPLETED:'completed',FAILED:'failed'};
export const SailingStatus={OPERATING:'operating',CHANGED:'changed',LIMITED:'limited',EXTRA:'extra',SUSPENDED:'suspended',ALL_SUSPENDED:'all_suspended',UNCONFIRMED:'unconfirmed',MAINTENANCE:'maintenance'};

export class InventoryService {
  /** DBトランザクション内で行ロックまたは楽観ロックを使用し、定員超過を防ぐ。 */
  async createHold({sailingId,passengers,vehicleSpaceUnits,idempotencyKey}){ throw new Error('backend implementation required'); }
  async confirmHold({holdId,paymentId}){ throw new Error('backend implementation required'); }
  async releaseHold({holdId,reason}){ throw new Error('backend implementation required'); }
}

export const routePolicy={
  iheya:{changeDeadlineMinutes:60,cancelDeadlineMinutes:60},
  izena:{changeDeadlineMinutes:60,cancelDeadlineMinutes:60}
};

export const roles={system_admin:['*'],iheya_admin:['iheya:*'],izena_admin:['izena:*'],port_staff:['reservation:read','boarding:write'],viewer:['*:read']};

