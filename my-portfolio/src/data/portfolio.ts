//プロフィール情報定義
export interface Profile{
    name: string            //名前(漢字)
    nameEn: string          //名前(ローマ字)
    role: string            //ロール
    school: string          //学校名
    department: string      //専攻名
    graduationYear: string  //卒業年度
    bio: string             //自己紹介文
    motto: string           //座右の銘
    avater: string          //顔写真等
    links:{
        github:string       //GitHubリンク
        twitter:string|null //Xリンク
    }
}
 
//スキル
export interface Skill{
    name:string             //名前
    version:string | null   //バージョン
    level:number            //スキルレベル
    category:string         //カテゴリ－
    capabilities:string[]   //できること
    note:string|null        //実装経験
}
 
//詳細情報
export interface Venue{
    name:string             //名前
    date:string             //日時
}
 
//作品パート
export interface Work{
    id: number              //連番
    title:string            //タイトル
    gener:string            //ジャンル
    category:string         //カテゴリー
    thumbnail:string        //サムネ
    screenshots:string[]    //スクリーンショット
    description:string      //説明
    tags:string[]           //タグ
    platform:string[]       //プラットフォーム
    period:string           //期間
    team:string             //作成チーム情報    
    role:string             //担当箇所
    github:string           //GitHubリンク
    link:string | null      //公開リンク
    venues:Venue[]          //出展・公開先
    techPoints:string|null  //ポイント
    designNotes:string|null //工夫
    implementationTheme:string|null//テーマ
    troubleshooting:string|null//問題・解決
    performance:string|null //パフォーマンス工夫
}
 
//ゲームジャム
export interface GameJam{
    name:string             //名前
    date:string             //日時
    theme:string            //情報
    description:string      //作品詳細
    platform:string[]       //プラットフォーム
    role:string             //担当箇所
    team:string             //チーム情報
    result:string|null      //結果
    url:string|null         //URL
    reflection:string       //学び、振り返り
}
 
export type CertStatus = "取得済み"|"受験予定"|"取得予定"|"学習中";
 
//資格情報
export interface Certification{
    name:string             //資格名
    date:string             //日時
    category:string         //カテゴリー
    score:string | null     //スコア
    status:CertStatus       //ステータス
}

//年表
export interface TimeLineItem{
    year:string             //年
    event:string            //イベント
}
 
export const profile:Profile = {
    name: "増井 司",
    nameEn: "Masui Tsukasa",
    role: "プログラマー",
    school: "京都デザイン＆テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2028年3月卒業見込み",
    bio: "私は、どんなことにも苦手意識を持たず、楽しんで挑戦できることが強みです。",
    motto: "目新しいことに挑み、楽しむ姿勢",
    avater: "/images/KaoSyaShin.jpg",
    links: {
        github: "https://github.com/tomato-eater",
        twitter: null
    }
}
 /*
 **【結論：モットーの提示】**
私のモットーは「目新しいことに挑み、楽しむ姿勢」です。技術の進化が激しいゲーム業界において、未知のツールや技術に好奇心を持って飛び込み、習得のプロセスそのものを楽しむことを大切にしています。 

**【背景・エピソード：創作活動での具体例】**
独学でプログラミングと3DCGを学ぶ中で、この姿勢を発揮してきました。当初は[例：Blenderでのモデリング]のみを行っていましたが、表現の幅を広げるために[例：UnityやUnreal Engine]を用いたゲーム開発という未知の領域に挑戦しました。 

**【直面した壁と、それをどう「楽しんだ」か】**
最初は、3Dモデルをプログラムで意図通りに動かす際、[例：バグの多発や、最適化の難しさ]という壁に直面しました。しかし、私はそれを「新しいパズルを解くような成長のチャンス」と捉え、海外の最新リファレンスを調べたり、新しいアセットやシェーダーを積極的に試したりして、課題解決のプロセスを徹底的に楽しみました。 

**【成果】**
その結果、[例：個人で一本のゲームを完成させ、〇〇で公開してフィードバックを得る／3DCGとプログラムが連動した、より高度な表現ができるようになり、作品のクオリティが大幅に向上する]という成果を得ました。 

**【結び：企業への貢献】**
この「新しい技術を恐れず、むしろワクワクしながら吸収する力」を活かし、御社でも常に最新のトレンドや開発手法を取り入れ、プレイヤーに今までにない「目新しいおもしろさ」を届けるクリエイターとして貢献いたします。
 
 */
export const skills:Skill[] = [
    {
        name: "Unity",
        version: "6",
        level: 85,
        category: "Game Engine",
        capabilities: ["2D/3D Game制作"],
        note: null
    },
    {
        name: "Unreal Engine",
        version: "5",
        level: 38,
        category: "Game Engine",
        capabilities: ["3DGame制作"],
        note: null
    },
    {
        name: "Blender",
        version: "5.1",
        level: 60,
        category: "DCC Tool",
        capabilities: ["オブジェクト作成","アニメーション作成"],
        note: "独学"
    },
    {
        name: "Maya",
        version: null,
        level: 50,
        category: "DCC Tool",
        capabilities: ["オブジェクト作成","アニメーション作成"],
        note: null
    },
    {
        name: "Zbrush",
        version: "2026.2.0.1",
        level: 68,
        category: "DCC Tool",
        capabilities: ["オブジェクト作成"],
        note: null
    },
]
 
export const venue:Venue={
    name: "",
    date: ""
}
 
export const works:Work[]=[
    {
    id: 1,
    title: "LostMemory",
    gener: "2Dアクション",
    category: "合同制作",
    thumbnail: "/images/games/",
    screenshots: [],
    description: "ソウルライクアクションゲーム",
    tags: ["合同制作"],
    platform: ["Windows"],
    period: "約10か月",
    team: "プランナー: 1人\nプログラマー: 2人\nデザイナー: 2人",
    role: "敵のAI、プレイヤーの攻撃、武器",
    github: "https://github.com/rukarukahamada/LostMemory",
    link: null,
    venues: [],
    techPoints: "ScriptableObjectを使用(初めて)して、武器データを作成した。",
    designNotes: null,
    implementationTheme: null,
    troubleshooting: null,
    performance: null
    },
    {
        id: 2,
        title: "カスタムソルジャー",
        gener: "2Dアクション",
        category: "個人制作",
        thumbnail: "/images/games/",
        screenshots: [],
        description: "ハンティングアクション",
        tags: ["個人製作"],
        platform: ["Windows"],
        period: "約3週間",
        team: "プログラマー: 1人",
        role: "敵やプレイヤー、タイトル画面等のプログラム",
        github: "https://github.com/tomato-eater/GPIII-01-2DGame",
        link: null,
        venues: [],
        techPoints: "セーブ・ロードとデータ削除を実装した。",
        designNotes: "Playerと敵のScriptをclass継承で作成し、ダメージ計算等を簡略化した。",
        implementationTheme: "",
        troubleshooting: "",
        performance: ""
    },
    {
        id: 3,
        title: "カイロス計画",
        gener: "2.5D脱出",
        category: "合同制作",
        thumbnail: "/images/games/",
        screenshots: [],
        description: "脱出ゲーム",
        tags: ["合同制作"],
        platform: ["Windows"],
        period: "約3か月",
        team: "プランナー: 1人\nプログラマー: 3人\nデザイナー: 2人",
        role: "アイテムやギミックの実装",
        github: "https://github.com/ku-zabu/kairosukeikaku",
        link: null,
        venues: [],
        techPoints: null,
        designNotes: null,
        implementationTheme: null,
        troubleshooting: null,
        performance: null
    },
]

export const gamejam:GameJam[]=[
    {
    name: "",
    date: "",
    theme: "",
    description: "",
    platform: [],
    role: "",
    team: "",
    result: null,
    url: null,
    reflection: ""
    }
]

export const certifications:Certification[]=[
    {
    name: "第二種電気工事士",
    date: "令和4年9月16日",
    category: "国家試験",
    score: "84点",
    status: "取得済み"
    }
]
 
export const timeline:TimeLineItem[]=[
    {
        year: "2024/3",
        event: "滋賀県立瀬田工業高校 卒業"
    },
    {
        year: "2024/4",
        event: "京都デザイン＆テクノロジー専門学校 入学"
    },
    {
        year: "2028/3",
        event: "京都デザイン＆テクノロジー専門学校 卒業見込み"
    }
]