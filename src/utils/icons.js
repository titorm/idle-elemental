import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

const icons = {
    // menu
    // menu: 'menu',

    // drawer items
    // analytics: 'analytics',
    // angleDown: 'angle-down',
    // angleLeft: 'angle-left',
    // angleRight: 'angle-right',
    // angleUp: 'angle-up',
    // at: 'at',
    // arrow_down: isIOS ? 'chevron-down' : 'arrow-down',
    // arrow_left: isIOS ? 'chevron-left' : 'arrow-left',
    // arrow_right: isIOS ? 'chevron-right' : 'arrow-right',
    // arrow_up: isIOS ? 'chevron-up' : 'arrow-up',
    // badge_percent: 'badge-percent',
    // barcode: 'barcode',
    // barcode_alt: 'barcode-alt',
    // barcode_read: 'barcode-read',
    // bars: 'bars',
    // bell: 'bell',
    // bell_on: 'bell-on',
    // board_teacher: 'chalkboard-teacher',
    bookmark: 'bookmark',
    // box: 'box',
    // box_alt: 'box-alt',
    // box_check: 'box-check',
    // box_full: 'box-full',
    // boxes: 'boxes',
    // boxes_alt: 'boxes-alt',
    // building: 'building',
    // bullseye: 'bullseye',
    // bullseye_arrow: 'bullseye-arrow',
    // business_time: 'business-time',
    // calendar: 'calendar',
    // calendar_alt: 'calendar-alt',
    // calendar_check: 'calendar-check',
    // calendar_minus: 'calendar-minus',
    // calendar_star: 'calendar-star',
    // calendar_times: 'calendar-times',
    // capsules: 'capsules',
    // cart_plus: 'cart-plus',
    // chart_bar: 'chart-bar',
    // chart_pie: 'chart-pie-alt',
    // check: 'check',
    // check_circle: 'check-circle',
    // check_double: 'check-double',
    // check_square: 'check-square',
    // chevron_down: 'chevron-down',
    // circle: 'circle',
    // clients: 'users',
    // clinic_medical: 'clinic-medical',
    // clipboard_list: 'clipboard-list',
    // clipboard_list_check: 'clipboard-list-check',
    // clipboard_prescription: 'clipboard-prescription',
    // clock: 'clock',
    // clone: 'clone',
    // cog: 'cog',
    // comment_lines: 'comment-lines',
    // comments_alt_dollar: 'comments-alt-dollar',
    // compress_arrows_alt: 'compress-arrows-alt',
    // copy: 'copy',
    // copyright: 'copyright',
    // diamond: 'diamond',
    // dollar_sign: 'dollar-sign',
    // double_check: 'double-check',
    // download: 'download',
    // edit: 'edit',
    // ellipsis_v: 'ellipsis-v',
    // envelope: 'envelope',
    // envelope_open: 'envelope-open',
    // exchange: 'exchange',
    // exclamation_circle: 'exclamation-circle',
    // exclamation_triangle: 'exclamation-triangle',
    // eye: 'eye',
    // eye_slash: 'eye-slash',
    // file: 'file',
    // file_alt: 'file-alt',
    // file_chart_line: 'file-chart-line',
    // file_check: 'file-check',
    // file_excel: 'file-excel',
    // file_exclamation: 'file-exclamation',
    // file_invoice: 'file-invoice',
    // file_invoice_dollar: 'file-invoice-dollar',
    // file_medical_alt: 'file-medical-alt',
    // file_times: 'file-times',
    // file_user: 'file-user',
    // filter: 'filter',
    fire: 'fire',
    // funnel_dollar: 'funnel-dollar',
    // gift: 'gift',
    // globe: 'globe',
    // hand_holding_usd: 'hand-holding-usd',
    // hand_receiving: 'hand-receiving',
    // handshake: 'handshake',
    // hands_helping: 'hands-helping',
    // hands_usd: 'hands-usd',
    // headset: 'headset',
    // history: 'history',
    // home: 'home',
    // hospital_user: 'hospital-user',
    // id_card: 'id-card',
    // image: 'image',
    // inbox_in: 'inbox-in',
    // industry: 'industry',
    // info: 'info',
    // info_circle: 'info-circle',
    // key: 'key',
    // list_ul: 'list-ul',
    // lock_alt: 'lock-alt',
    // long_arrow_down: 'long-arrow-down',
    // long_arrow_up: 'long-arrow-up',
    // luggage_cart: 'luggage-cart',
    // map_marker_check: 'map-marker-check',
    // minus: 'minus',
    // minus_circle: 'minus-circle',
    // minus_square: 'minus-square',
    // mobile: isIOS ? 'mobile' : 'mobile-android',
    // money_check_alt: 'money-check-alt',
    // money_check_edit_alt: 'money-check-edit-alt',
    // paper_plane: 'paper-plane',
    // pencil: 'pencil',
    // people_alt: 'people-alt',
    // people_arrows: 'people-arrows',
    // people_carry: 'people-carry',
    // percentage: 'percentage',
    // phone_alt: 'phone-alt',
    // pills: 'pills',
    // plus: 'plus',
    // plus_circle: 'plus-circle',
    // plus_square: 'plus-square',
    // power_off: 'power-off',
    // question_circle: 'question-circle',
    // receipt: 'receipt',
    // repeat_alt: 'repeat-alt',
    // rocket_launch: 'rocket-launch',
    // route: 'route',
    // save: 'save',
    // search: 'search',
    // search_dollar: 'search-dollar',
    // seller: 'user-chart',
    // shipping_fast: 'shipping-fast',
    // shipping_timed: 'shipping-timed',
    // shopping_cart: 'shopping-cart',
    // slash: 'slash',
    // square: 'square',
    // star: 'star',
    // stopwatch: 'stopwatch',
    store: 'store',
    // sign_out_alt: 'sign-out-alt',
    // sync: 'sync',
    // tag: 'tag',
    // thermometer_full: 'thermometer-full',
    // thermometer_half: 'thermometer-half',
    // thermometer_quarter: 'thermometer-quarter',
    // ticket_alt: 'ticket-alt',
    // times: 'times',
    // times_circle: 'times-circle',
    // trash: 'trash',
    // trash_alt: 'trash-alt',
    // upload: 'upload',
    // usd_circle: 'usd-circle',
    // wallet: 'wallet',
    // warehouse: 'warehouse',
    // warehouse_alt: 'warehouse-alt',
    // wifi_slash: 'wifi-slash',

    // user
    // user: 'user',
    // user_circle: 'user-circle',
    // user_chart: 'user-chart',
    // user_check: 'user-check',
    // user_cog: 'user-cog',
    // user_friends: 'user-friends',
    // user_tag: 'user-tag',
    // user_tie: 'user-tie',
    // user_times: 'user-times',
    // users: 'users',

    // emoji
    // angry: 'angry',
    // dizzy: 'dizzy',
    // flag: 'flag',
    // flushed: 'flushed',
    // frown: 'frown',
    // frown_open: 'frown-open',
    // grimace: 'grimace',
    // grin: 'grin',
    // grin_alt: 'grin-alt',
    // grin_beam: 'grin-beam',
    // grin_beam_sweat: 'grin-beam-sweat',
    // grin_hearts: 'grin-hearts',
    // grin_squint: 'grin-squint',
    // grin_squint_tears: 'grin-squint-tears',
    // grin_stars: 'grin-stars',
    // grin_tears: 'grin-tears',
    // grin_tongue: 'grin-tongue',
    // grin_tongue_squint: 'grin-tongue-squint',
    // grin_tongue_wink: 'grin-tongue-wink',
    // grin_wink: 'grin-wink',
    // kiss: 'kiss',
    // kiss_beam: 'kiss_beam',
    // kiss_wink_heart: 'kiss_wink_heart',
    // laugh: 'laugh',
    // laugh_beam: 'laugh_beam',
    // laugh_squint: 'laugh-squint',
    // laugh_wink: 'laugh-wink',
    // meh: 'meh',
    // meh_blank: 'meh-blank',
    // meh_rolling_eyes: 'meh-rolling-eyes',
    // sad_cry: 'sad-cry',
    // sad_tear: 'sad_tear',
    // smile: 'smile',
    // smile_beam: 'smile-beam',
    // smile_wink: 'smile-wink',
    // surprise: 'surprise',
    // tired: 'tired',

    // brands
    // apple: 'apple',
    // google_play: 'google-play',
    // whatsapp: 'whatsapp',
};

export default icons;
