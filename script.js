function get_quest() {
var questions = [
"не разрешал незнакомцам целовать свои щиколотки",
"не лежал трезвым на асфальте в центре города",
"не спал с кем-то на тусе",
"не целовал незнакомца",
"не отбивал у кого-то девушку/парня",
"не был арестован",
"не давал взятки",
"не воровал что-то из магазина",
"не пил бесплатно в баре",
"не уезжал спонтанно в поездку",
"не жил с парнем/девушкой",
"не проводил ночь с незнакомцем",
"не целовал своего друга (целовала подругу) взасос",
"не оставлял засосы",
"не кусал кого-либо за сосок",
"не был объектом харассмента",
"не разбивал кому-то сердце",
"не пытался кого-то свести",
"не носил одежду противоположного пола",
"не делал массаж кому-то на тусе",
"не напивался, играя в <Я никогда не...>",
"не встречался с двумя сразу",
"не изменял своей половинке",
"не был безответно влюблен",
"не нарушал закон",
"не напивался до полного беспамятства",
"не был накуренный при родителях",
"не ездил в путешествие со своей половинкой",
"не терялся в городе",
"не угонял машину",
"не ночевал у незнакомца",
"ничего не ломал на тусе",
"не лазил по крышам/стройкам/заброшкам",
"не делал секси-текилу",
"не был в гей-баре",
"не целовался со своим полом",
"никого не френдзонил",
"не делал вид, что мне нравится человек, чтобы его не обидеть",
"не пробовал грибы",
"не водил в пьяном виде",
"не ездил на машине в пьяном виде",
"не отправлял кому-то свои интимные фотки",
"не играл в эротические настольные игры",
"делал что-то, за что мне стыдно до сих пор",
"тащил пьяного друга домой",
"был тем, кого тащат пьяным домой",
"смотрел порно",
"смотрел гей-порно",
"видел мертвое тело",
"не хотел поцеловать кого-то с этой тусы",
"не флиртовал с сестрой подруги (флиртовала с братом друга)",
"отправлял сообщение не тому человеку",
"купался голым в море/океане",
"танцевал стриптиз",
"устраивал пожар",
"рисковал жизнью",
"лизал пол",
"был на кладбище ночью",
"любил сильно-сильно и взаимно",
"начинал снова встречаться с бывшей (бывшим)",
"пел пьяный в караоке",
"писал стихи для кого-то",
"танцевал всю ночь",
"тусил до закрытия клуба",
"ловил машину на трассе",
"готовил романтический ужин",
"лажал на свидании",
"плакал над фильмом или песней",
"раздевался в общественном месте",
"хотел замутить с персонажем фильма или игры",
"гуглил сам себя",
"сталкерил кого-либо",
"читал тайком чужие переписки",
"сосал палец (любой)",
"ел что-то на спор",
"заходил не в тот туалет",
"ломал мебель во время секса",
"смотрел на обнаженного себя в зеркало",
"притворялся, что у меня совпадают интересы с человеком, который мне нравится",
"пробовал еду для животных",
"ломал что-то в общественном месте",
"нарушал правило 5 секунд",
"делал массаж парню",
"делал массаж девушке",
"писал в раковину",
"использовал фейковые документы",
"был закован в наручники",
"сбегал из дома",
"проводил ночь в центре города",
"руинил вечеринку",
"врал полицейским",
"общался с полицией накуренным или под чем-то",
"создавал фейковый аккаунт",
"играл в карты на деньги",
"играл на раздевание",
"проигрывал на раздевание",
"пил на парах",
"просыпался в неизвестном месте после тусы",
"танцевал на столе или барной стойке",
"получал напиток от незнакомца",
"пытался кого-то споить",
"писал бывшей (бывшему) по пьяни",
"пил шоты, не используя рук",
"участвовал в пабкроуле",
"использовал тупые подкаты",
"был другом <с привилегиями>",
"был в секс-шопе (онлайн считается)",
"принимал с кем-то ванную",
"называл девушке (парню) фейковый номер телефона",
"ставил кому-то засос",
"целовал кого-то в присутствии человека, которому он (она) нравится",
"просил кого-то притвориться моей парой",
"спал с 5 разными партнерами",
"не фантазировал о своем друге",
"не фантазировал о своей подруге",
"не спал с проституткой",
"встречался с кем-то тайно",
"хотел парня/деушку своей поруги/друга",
"оставался с разбитым сердцем",
"занимался оральным сексом",
"не был влюблен",
"занимался сексом в поезде",
"врал кому-то, чтобы переспать",
"открывал дверь дома в обнаженном виде",
"занимался виртуальным сексом",
"заставлял своего партнера комплексовать по поводу тела",
"бросал свою вторую половинку",
"мастурбировал в общественном месте (даже не себе)",
"оставлял свое нижнее белье в публичных местах",
"подглядывал за кем-то",
"забывал надеть нжнее белье",
"покупал презервативы",
"покупал прокладки",
"снимал на видео свой танец",
"прощал предательства",
"смотрел порно с друзьями",
"путешествовал в горы с палатками",
"падал в люк",
"выбегал голым на улицу",
"был преследуем маньяком",
"тратил последние деньги на презервативы",
"целовался в кинотеатре",
"надувал презервативы",
"доил корову",
"выставлял аватарку с девушкой (парнемж) ВКонтакте",
"делал тату",
"делал операцию",
"выпивал кружку протеина за раз",
"танцевал без одежды",
"думал о суициде",
"встречался с рыжим (рыжей)",
"съедал весь торт",
"дедлал стойку на руках",
"желал кому-то смерти",
"купался в фонтане",
"участвовал в митинге/забастовке",
"устраивал буллинг",
"был на нудистском пляже",
"мастурбировал на фото своих знакомых",
"кусал кого-то до следов",
"досматривал порно до конца",
"пытался сексом загладить свою вину",
"ездил на сборы"
];


var num = Math.floor(Math.random()*questions.length);
var num = Math.floor(Math.random()*questions.length);
document. getElementById("result-field").innerHTML = questions[num];

}
