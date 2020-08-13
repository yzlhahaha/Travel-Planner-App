import { get_date } from './js/app'
import { get_city_info } from './js/app'
import { get_weather_info } from './js/app'
import { get_image } from './js/app'
import { heytrip } from './js/app'
import { postData } from './js/app'
import { updateUI } from './js/app'
import { removeUI } from './js/app'
import { clickevent } from './js/app'
import { clickremove } from './js/app'
import './styles/style.scss'

document.getElementById('generate').addEventListener('click', clickevent);
document.getElementById('remove').addEventListener('click', clickremove);

export {
    get_date,
    get_city_info,
    get_weather_info,
    get_image,
    heytrip,
    postData,
    updateUI,
    removeUI,
    clickevent,
    clickremove
}