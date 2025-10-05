import Scroll from "./src/Components/Scroll";

export default function Information() {
  return (
    <div className="max-w-screen-sm mx-auto w-5/6 pt-24">
      <h2 className="text-xl font-extrabold pt-8 text-center">
        基本情報を入力
      </h2>
      <Scroll />
      <h2 className="text-base font-bold pt-8">
        対象イベント: 退職/引越し/両方
      </h2>
      <h2 className="text-base font-bold pt-8">
        就業予定: 継続雇用/転職決定済み/未定（無職期間あり）
      </h2>
      <h2 className="text-base   font-bold pt-8">
        住所変更: あり/なし（ありの場合のみ詳細へ） 都道府県
      </h2>
      <h2 className="text-base font-bold pt-8">単身/配偶者あり/子どもあり</h2>
      <h2 className="text-base font-bold pt-8">賃貸/持ち家</h2>
      <h2 className="text-base font-bold pt-8">
        あり/なし（結婚・離婚等で氏名変更が必要か）
      </h2>
      <h2 className="text-base font-bold pt-8">
        重要日付: 退職日/引越し日/（あれば）入社日
      </h2>
      <h2 className="text-base font-bold pt-8">
        就業状態: 継続/転職決定/未定（無職期間あり）
      </h2>
      <h2 className="text-base font-bold pt-8">
        住所変更: 有無＋種別（市内/県内/県外）
      </h2>
      <h2 className="text-base font-bold pt-8">
        地域: 都道府県のみ（市区町村は任意）
      </h2>
      <h2 className="text-base font-bold pt-8">
        世帯状況: 単身/配偶者/子ども（扶養有無）
      </h2>
      <h2 className="text-base font-bold pt-8">
        住宅形態: 賃貸/持家＋解約予告期間（1/2ヶ月）
      </h2>
      <h2 className="text-base font-bold pt-8">改姓有無: あり/なし</h2>
      <h2 className="text-base font-bold pt-8">車/バイク: あり/なし</h2>
      <h2 className="text-base font-bold pt-8">
        契約中サービス: 電気/ガス/水道/ネット/携帯（該当のみON）
      </h2>
      <h2 className="text-base font-bold pt-8">
        貸与物の有無: PC/社用携帯/入館証 など返却対象
      </h2>
      <h2 className="text-base font-bold pt-8">
        健保扱い: 任意継続/国保（就業状態から推定でも可）
      </h2>
      <h2 className="text-base font-bold pt-8">
        年金区分変更: 第2→第1/第3号など
      </h2>
      <h2 className="text-base font-bold pt-8">郵便転送: 利用する/しない</h2>

      <h2 className="text-base font-bold pt-8">
        金融機関住所変更: 銀行/クレカ
      </h2>
      <h2 className="text-base font-bold pt-8">駐車場契約・NHK・火災保険</h2>
    </div>
  );
}
