import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useHistory } from 'react-router-dom';
import CreateNewAccountModal from './createNewAccountModal';
import { createNewAccountModalOpen } from '../store/actions/modalActions';
import { BiBookmarkPlus } from 'react-icons/bi';
import { BiBookAdd } from 'react-icons/bi';

interface group {
  id: number;
  User: Array<object>;
  meetName: string;
  totalcost: number;
}

const SelectAccountBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userImage = useSelector(
    (state: RootState) => state.userStatus.userData?.thumbnail,
  );
  const Allgroups = useSelector((state: RootState) => state.userStatus?.groups);
  const createNewAccount = () => {
    dispatch(createNewAccountModalOpen());
  };

  const onClickGroup = (group: group) => {
    history.push('/accountpage/' + group.id);
  };
  return (
    <>
      <CreateNewAccountModal></CreateNewAccountModal>
      <div className="SelectAccountBox">
        {Allgroups.map((group: any) => (
          <div className="oneAccountBox">
            <div className="titleAccountBox">{group.meetName}</div>
            <div className="SelectAccountMembers">
              {group.Users.map((member: any, index:any) => (
                <div className="SelectOneMemberBox">
                  {member.img !== 'undefined' ? (
                    <img
                      className="SelectAccountMemberImg"
                      src={member.img}
                      alt="유저프로필"
                      key={index}
                    ></img>
                  ) : (
                    <div className="SelectAccountMemberIcon">
                      {member.email.slice(0, 1).toUpperCase()}
                    </div>
                  )}

                  <div className="SelectAccountMemberName">{member.email}</div>
                </div>
              ))}
            </div>
            <div className="SelectAccountBotttom">
              <button
                onClick={() => onClickGroup(group)}
                className="SelectAccountJoinBtn"
              >
                들어가기
              </button>
            </div>
          </div>
        ))}

        {Allgroups.length < 4 ? (
          <div onClick={createNewAccount} className="AddAccountBox">
            <BiBookAdd></BiBookAdd>
            <div className="titleAddAccountBox">새 가계부 생성</div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SelectAccountBox;
