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
    version:string          //バージョン
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
    tags:string[]           //タグ
    platform:string[]       //プラットフォーム
    period:string           //期間
    team:string             //作成チーム情報    
    role:string             //担当箇所
    girhub:string           //GitHubリンク
    link:string             //公開リンク
    venues:Venue[]          //出展・公開先
    techPoints:string|null  //ポイント
    designNotes:string|null //工夫
    implmntationTheme:string|null   //テーマ
    troubleshooting:string|null      //問題・解決
    perfformance:string|null        //パフォーマンス工夫
}
 
export interface GameJam{
    name:string             //名前
    date:string             //日時
    theme:string            //情報
    description:string      //作品詳細
    platform:string[]       //プラットフォーム
    role:string             //担当箇所
    team:string             //チーム情報
    result:string|null      //結果
    url:string|null         //リンク
    reflection:string       //学び
}
 
export type CerStatus="取得済み"|"受験予定"|"取得予定"|"学習中";
 
//資格情報
export interface Certification{
    name:string
    date:string
    category:string
    score:string
    status:CerStatus
}
 
export interface TimeLineItem{
    year:string
    event:string
}
 
export const profile:Profile={
    name: "増井司",
    nameEn: "Masui Tsukasa",
    role: "プログラマー",
    school: "京都デザイン＆テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2028年3月予定",
    bio: "FFが好きです。",
    motto: "食べちゃうニャン",
    avater: "顔写真だお",
    links: {
        github: "https://github.com/tomato-eater",
        twitter: null
    }
}
 
export const skills:Skill[]=[
    {
        name: "",
        version: "",
        level: 0,
        category: "",
        capabilities: [],
        note: null
    }
]
 
export const venue:Venue={
    name: "",
    date: ""
}
 
export const work:Work={
    id: 0,
    title: "",
    gener: "",
    category: "",
    thumbnail: "",
    screenshots: [],
    tags: [],
    platform: [],
    period: "",
    team: "",
    role: "",
    girhub: "",
    link: "",
    venues: [],
    techPoints: null,
    designNotes: null,
    implmntationTheme: null,
    troubleshooting: null,
    perfformance: null
}
 
export const gamejam:GameJam={
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
 
export const certification:Certification={
    name: "",
    date: "",
    category: "",
    score: "",
    status: "取得済み"
}
 
export const timeline:TimeLineItem[]=[
    {
        year: "",
        event: ""
    }
]