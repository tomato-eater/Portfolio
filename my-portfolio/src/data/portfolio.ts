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
        email:string|null   //Email
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
    bio: "おらおら\nむだむだ",
    motto: "出来る 出来ない の問題じゃない\nやるしかなければ,やるだけだ。",
    avater: "/images/KaoSyaShin.jpg",
    links: {
        github: "https://github.com/tomato-eater",
        email: "mtsukasa0510@gmail.com",
        twitter: null
    }
}
 
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
        level: 15,
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
        level: 25,
        category: "DCC Tool",
        capabilities: ["オブジェクト作成"],
        note: null
    }
]
 
export const venue:Venue={
    name: "",
    date: ""
}
 
export const works:Work[]=[
    {
    id: 1,
    title: "",
    gener: "",
    category: "",
    thumbnail: "/images/games/",
    screenshots: [],
    description: "",
    tags: [],
    platform: [],
    period: "",
    team: "",
    role: "",
    github: "",
    link: null,
    venues: [],
    techPoints: null,
    designNotes: null,
    implementationTheme: null,
    troubleshooting: null,
    performance: null
    }
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
    score: "",
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