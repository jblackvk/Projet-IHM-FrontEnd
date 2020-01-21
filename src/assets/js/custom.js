import{cheerio} from 'node_modules/cheerio/lib';
const $=cheerio.load('<h2 class="title"> Hello World !!</h2>');
$('h2.title').text('Hello there');
$('h2').addClass('welcome');