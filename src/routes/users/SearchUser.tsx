// import Tippy from "@tippyjs/react";
import clsx from "clsx";
import { FC, ChangeEvent, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../common/component/Modal";
import IconClose from "../../assets/icons/close.svg";
import IconSearch from "../../assets/icons/search.svg";

import { useSearchUserMutation } from "../../app/services/user";
import StyledButton from "../../common/component/styled/Button";
import Input from "../../common/component/styled/Input";
import { useKey } from "rooks";
import Avatar from "../../common/component/Avatar";
import BASE_URL from "../../app/config";
type Props = {
  closeModal: () => void;
};
type Keyword = "id" | "email";
const SearchUser: FC<Props> = ({ closeModal }) => {
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState<Keyword>("id");
  const [input, setInput] = useState({
    id: "",
    email: ""
  });
  const [searchUser, { data, isSuccess, isLoading, reset }] = useSearchUserMutation();
  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    const tmp = {
      [keyword]: evt.target.value
    };
    setInput(prev => ({ ...prev, ...tmp }));
  };
  const resetInput = () => {
    reset();
    setInput(prev => ({ ...prev, [keyword]: "" }));
  };
  useKey(
    "Enter",
    (evt) => {
      evt.preventDefault();
      // return true;
      console.log("enter");

      searchUser(input[keyword]);
    },
    {
      target: inputRef,
    }
  );
  const handleChangeKeyword = (kw: Keyword) => {
    setKeyword(kw);
  };
  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
    }
  }, [isSuccess, data]);
  // const tmpData = { "avatar_updated_at": 0, "birthday": 0, "create_by": "password", "email": "tristan@alex.com", "gender": 0, "is_admin": true, "is_bot": false, "language": "en-US", "name": "Admin", "uid": 1 };
  // const showResult = isSuccess && data;
  return (
    <Modal>
      <div className=" relative flex flex-col gap-2 w-96 px-4 py-8 rounded-lg bg-gray-100 dark:bg-gray-900 text-slate-900 dark:text-slate-100">
        <div className="flex items-center gap-2 py-2">
          <StyledButton className={clsx("mini", keyword == "email" && "ghost !border-none !shadow-none")} onClick={handleChangeKeyword.bind(null, "id")}>Search by ID</StyledButton>
          <StyledButton className={clsx("mini", keyword == "id" && "ghost !border-none !shadow-none")} onClick={handleChangeKeyword.bind(null, "email")}>Search by Email</StyledButton>
        </div>
        <div className="w-full" ref={inputRef}>
          <Input className="none" disabled={isLoading} prefix={<IconSearch className="dark:fill-gray-400 w-6 h-6 shrink-0" />} value={input[keyword]} placeholder={`${t("action.search")}...`} onChange={handleInput} />
        </div>
        <div className="min-h-[200px] flex-center">
          {isSuccess ? (data ? <div className="flex flex-col items-center pt-10">
            <Avatar className="rounded-full" src={data.avatar_updated_at === 0 ? "" : `${BASE_URL}/resource/avatar?uid=${data.uid}&t=${data.avatar_updated_at}`} name={data.name} width={120} height={120} />
            <span className="my-2 dark:text-gray-100 text-gray-950">{data.name}</span>
            <div className="flex gap-2 my-2">
              <StyledButton className="mini ghost" onClick={resetInput}>Cancel</StyledButton>
              <StyledButton className="mini">Add to contact</StyledButton>
            </div>
          </div> : <div className="w-full h-full text-center flex flex-col gap-3 items-center">
            <span className="text-sm text-gray-800 dark:text-gray-200">
              未找到用户，或该用户不允许被搜索
            </span>
            <StyledButton className="mini" onClick={resetInput}>Ok</StyledButton>
          </div>) : null}
        </div>
        <IconClose role="button" className="absolute top-2 right-2 dark:fill-white w-5 h-5" onClick={closeModal} />
      </div>
    </Modal>
  );
};
export default SearchUser;
