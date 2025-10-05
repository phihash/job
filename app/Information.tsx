"use client";
import Scroll from "./src/Components/Scroll";
import useProfileStore from "./store/profileStore";

export default function Information() {
  const status = useProfileStore((store) => store.status);
  const event = useProfileStore((store) => store.event);
  const setEvent = useProfileStore((store) => store.setEvent);
  if (status === "情報入力中") {
    return (
      <div className="max-w-screen-sm mx-auto w-5/6 pt-24">
        <h2 className="text-xl font-extrabold pt-8 text-center">
          基本情報を入力
        </h2>
        <Scroll />
        <h2 className="text-base font-bold py-4">
          対象イベント:
          {event}
        </h2>
        <div className="flex gap-2">
          <button
            className="cursor-pointer block bg-green-600 px-3 py-2 rounded-xl font-bold text-white text-sm"
            onClick={() => setEvent("引越しのみ")}
          >
            引越しのみ
          </button>
          <button
            className="cursor-pointer block bg-green-600 px-3 py-2 rounded-xl font-bold text-white text-sm"
            onClick={() => setEvent("退職のみ")}
          >
            退職のみ
          </button>
          <button
            className="cursor-pointer block bg-green-600 px-3 py-2 rounded-xl font-bold text-white text-sm"
            onClick={() => setEvent("退職と引越し")}
          >
            退職と引越し
          </button>
        </div>

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
  } else {
    return (
      <div className="max-w-screen-sm mx-auto w-5/6 pt-24">
        <h2 className="text-xl font-extrabold pt-8 text-center">
          上のボタンからはじめるを押してください
        </h2>
      </div>
    );
  }
}
