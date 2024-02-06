import { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11 } from "./asset";

const quizData = [
    {
        title: "01",
        icon: Q1,
        question: "一覺醒來，你發現自己身處在一片未知的森林中，你試圖理解發生了什麼，你會先...",
        options: [
            {
                text: '確認自己的模樣，是否還是原來的自己',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 10, // 孔雀
                }
            },
            {
                text: '檢查身上的背包，是否有可使用的裝備',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 1, // 翠鳥
                    E: 3, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '觀察周遭的環境，是否有相關的線索',
                score: {
                    A: 0, // 獼猴
                    B: 3, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
        
        ],
    },
    {
        title: "02",
        icon: Q2,
        question: "為了尋找回去的方法，你開始往前探索，你覺得前方會遇到...",
        options: [
            {
                text: '埋藏在森林深處的寶藏',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 10, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '賜予智慧與能力的精靈',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 10, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '回答各種問題的智者',
                score: {
                    A: 0, // 獼猴
                    B: 10, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },

        ],
    },
    {
        title: "03",
        icon: Q3,
        question: "在森林裡走了一段時間，還是沒有任何發現，你開始擔心...",
        options: [
            {
                text: '下禮拜的期末考',
                score: {
                    A: 0, // 獼猴
                    B: 1, // 鯊魚
                    C: 0, // 狐蒙
                    D: 3, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '跟朋友約好的畢業旅行',
                score: {
                    A: 10, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '奶奶的六十歲大壽',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 10, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
        ],
    },
    {
        title: "04",
        icon: Q4,
        question: "遇見了一隻昏倒在山洞前的小梅花鹿，你會怎麼做？",
        options: [
            {
                text: '帶走牠，邊尋找救治的資源',
                score: {
                    A: 10, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '判斷有沒有幫助牠的能力或裝備',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 10, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '裝作沒看到直接經過',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 10, // 棕熊
                    F: 5, // 孔雀
                }
            },

        ],
    },
    {
        title: "05",
        icon: Q5,
        question: "在山洞裡摸黑走了一陣子，終於看見出口的亮光，這時聽見有腳步聲朝你走來，你覺得會是...",
        options: [
            {
                text: '兇猛的蛤蟆怪',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 3, // 翠鳥
                    E: 3, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '同樣迷路的小精靈',
                score: {
                    A: 3, // 獼猴
                    B: 0, // 鯊魚
                    C: 3, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '友善指引方向的香菇精',
                score: {
                    A: 0, // 獼猴
                    B: 10, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },

        ],
    },

    {
        title: "06",
        icon: Q6,
        question: "一大片清澈的湖水印入眼簾，旁邊立牌寫著「許願池」，你願意投入什麼作為許願的代價？",
        options: [
            {
                text: '背包裡僅存的食物',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: -10, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '祖傳的玉珮',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: -10, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: -3, // 孔雀
                }
            },
            {
                text: '跟朋友的交換日記',
                score: {
                    A: -10, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: -3, // 孔雀
                }
            },
        ],
    },
    {
        title: "07",
        icon: Q7,
        question: "一位美麗的湖中女神真的出現，為了幫助你更順利地在這座森林中探索，你選擇...",
        options: [
            {
                text: '變得更強大，遇到野獸或險峻的路都不需懼怕',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 10, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '值得信任的夥伴，陪伴你、與你一起面對未知',
                score: {
                    A: 5, // 獼猴
                    B: 0, // 鯊魚
                    C: 5, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '告訴你，你來到這座森林的原因',
                score: {
                    A: 0, // 獼猴
                    B: 10, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
        ],
    },
    {
        title: "08",
        icon: Q8,
        question: "道別湖中女神後，你繼續前行，發現空無一人的小木屋，裡面有...",
        options: [
            {
                text: '豐盛的食物',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 10, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '乾淨的浴室',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 20, // 孔雀
                }
            },
            {
                text: '溫馨的沙發',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 10, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
        ],
    },
    {
        title: "09",
        icon: Q9,
        question: "打開後門出去，外面有著絕景雲海，伴隨著金黃色的夕陽，十分美麗...",
        options: [
            {
                text: '「要是發到IG上一定會有很多人來問這是哪裡！」',
                score: {
                    A: 3, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 3, // 孔雀
                }
            },
            {
                text: '「或許來到這裡就是為了讓我看見這副景色吧！」',
                score: {
                    A: 0, // 獼猴
                    B: 10, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '「這裡完全不輸觀光勝地，來這一趟其實挺賺的嘛！」',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 10, // 棕熊
                    F: 0, // 孔雀
                }
            },
        ],
    },
    {
        title: "10",
        icon: Q10,
        question: "突然一陣天搖地動，森林裡似乎發生了巨變，此時你會擔心...",
        options: [
            {
                text: '自己能否回去',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 3, // 翠鳥
                    E: 3, // 棕熊
                    F: 3, // 孔雀
                }
            },
            {
                text: '這座森林的未來',
                score: {
                    A: 0, // 獼猴
                    B: 3, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '昏迷的梅花鹿',
                score: {
                    A: 3, // 獼猴
                    B: 0, // 鯊魚
                    C: 3, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
        ],
    },
    {
        title: "11",
        icon: Q11,
        question: "混亂過後，森林某處傳來了音樂與歌聲，彷彿萬物甦醒，可能會是？",
        options: [
            {
                text: '通往家裡的傳送門',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 10, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '森林動物們在開趴',
                score: {
                    A: 10, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 0, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
            {
                text: '你擅長的才藝大賽',
                score: {
                    A: 0, // 獼猴
                    B: 0, // 鯊魚
                    C: 0, // 狐蒙
                    D: 10, // 翠鳥
                    E: 0, // 棕熊
                    F: 0, // 孔雀
                }
            },
        ],
    },
];

export default quizData;
