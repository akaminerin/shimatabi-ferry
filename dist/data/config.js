export const DEMO_MODE = true;

export const fareMaster = {
  iheya: {
    adult: { oneWay: 2480, roundTrip: 4720 },
    child: { oneWay: 1240, roundTrip: 2360 },
    environmentTaxRule: { amount: 100, minimumAge: 0, note: '村外からの入域者（免除条件は要確認）' },
    cancelFeePerPassenger: 200
  },
  izena: {
    adult: { oneWay: 1840, roundTrip: 3500 },
    child: { oneWay: 920, roundTrip: 1750 },
    environmentTaxRule: { amount: 100, minimumAge: 18, note: '18歳以上（免除条件は要確認）' },
    cancelFeePerPassenger: 200
  }
};

export const routeMaster = {
  iheya: {
    id: 'iheya', name: '伊平屋島', symbol: '🌲', symbolLabel: '念頭平松をイメージした自然のシンボル',
    ship: 'フェリーいへやⅢ', mainlandPort: '運天港', islandPort: '前泊港', durationMinutes: 80,
    onlineBookingStatus: 'current', serviceLabel: '現行オンライン予約', official: 'https://www.vill.iheya.okinawa.jp/',
    scheduledTimetable: {
      outbound: [['11:00','12:20'],['15:00','16:20']],
      inbound: [['09:00','10:20'],['13:00','14:20']]
    }, fare: fareMaster.iheya, passengerCapacity: 200, vehicleReservation: { status: 'future', fields: ['vehicleType','plateNumber','length','direction'] }
  },
  izena: {
    id: 'izena', name: '伊是名島', symbol: '♛', symbolLabel: '尚円王と島の歴史をイメージしたシンボル',
    ship: 'フェリーいぜな尚円', mainlandPort: '運天港', islandPort: '仲田港', durationMinutes: 55,
    onlineBookingStatus: 'proposed', serviceLabel: '共通予約システム構想', official: 'https://www.vill.izena.okinawa.jp/',
    scheduledTimetable: {
      outbound: [['10:30','11:25'],['15:30','16:25']],
      inbound: [['09:00','09:55'],['13:30','14:25']]
    }, fare: fareMaster.izena, passengerCapacity: 200, vehicleReservation: { status: 'future', fields: ['vehicleType','plateNumber','length','direction'] }
  }
};

export const demoOperationStatus = {
  iheya: {
    officialUpdatedAt: null, fetchedAt: new Date().toISOString(), sourceMode: 'demo', overallStatus: 'normal',
    message: '通常運航の表示例です',
    outbound: [
      { scheduledDeparture:'11:00', departure:'11:00', arrival:'12:20', operationStatus:'normal', reservationStatus:'few' },
      { scheduledDeparture:'15:00', departure:'15:00', arrival:'16:20', operationStatus:'normal', reservationStatus:'open' }
    ],
    inbound: [
      { scheduledDeparture:'09:00', departure:'09:00', arrival:'10:20', operationStatus:'normal', reservationStatus:'closed' },
      { scheduledDeparture:'13:00', departure:'13:00', arrival:'14:20', operationStatus:'normal', reservationStatus:'open' }
    ]
  },
  izena: {
    officialUpdatedAt: null, fetchedAt: new Date().toISOString(), sourceMode: 'demo', overallStatus: 'changed',
    message: '第2便の時刻変更を示す表示例です',
    outbound: [
      { scheduledDeparture:'10:30', departure:'10:30', arrival:'11:25', operationStatus:'normal', reservationStatus:'open' },
      { scheduledDeparture:'15:30', departure:'16:30', arrival:'17:25', operationStatus:'changed', reservationStatus:'open' }
    ],
    inbound: [
      { scheduledDeparture:'09:00', departure:'09:00', arrival:'09:55', operationStatus:'normal', reservationStatus:'open' },
      { scheduledDeparture:'13:30', departure:'13:30', arrival:'14:25', operationStatus:'cancelled', reservationStatus:'unavailable' }
    ]
  }
};

export const demoReservationCapacity = {
  iheya: { outbound:[{reserved:190,held:0},{reserved:92,held:3}], inbound:[{reserved:118,held:0},{reserved:84,held:2}], vehicle:[{capacity:20,reserved:16},{capacity:20,reserved:8}] },
  izena: { outbound:[{reserved:152,held:3},{reserved:68,held:1}], inbound:[{reserved:74,held:2},{reserved:200,held:0}], vehicle:[{capacity:24,reserved:11},{capacity:24,reserved:20}] }
};

export const demoBookings = {
  'DEMO-1042': { bookingNumber:'DEMO-1042', routeId:'iheya', direction:'outbound', date:'2026-11-10', departure:'11:00', passengers:['山城 花子（大人）','山城 海（小人）'], status:'confirmed', qrStatus:'unused', refundStatus:'対象外' },
  'DEMO-CANCEL': { bookingNumber:'DEMO-CANCEL', routeId:'izena', direction:'inbound', date:'2026-11-10', departure:'13:30', passengers:['田中 太郎（大人）'], status:'cancelledByOperator', qrStatus:'cancelled', refundStatus:'返金処理中' }
};

export const operationLabels = { normal:'通常運航', changed:'時刻変更', cancelled:'欠航', undecided:'運航未定', extra:'臨時便' };
export const reservationLabels = { open:'予約可能', few:'残りわずか', full:'満席', closed:'受付終了', unavailable:'予約対象外' };

