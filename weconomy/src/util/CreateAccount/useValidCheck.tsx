interface props {
  category: any;
  cost: any;
  desc: any;
}

const validCheck = (
  income1: props,
  income2: props,
  outcome1: props,
  outcome2: props,
  outcomeCounter: number,
  incomeCounter: number,
  selectedMeet: any,
  selectedDate: any,
) => {
  const obj = { error: 'none' };


  if (selectedMeet === '선택해주세요') {
    obj.error = '그룹을 선택하지 않았습니다.';
  } else if (new Date(selectedDate).toLocaleDateString() === 'Invalid Date') {
    obj.error = '정확한 날짜를 기입해주세요.';
  } else {
    if (!income1.cost && !income1.desc) {
      if (outcomeCounter === 1) {
        if (
          outcome1.category === '선택해주세요' ||
          !outcome1.cost ||
          !outcome1.desc
        ) {
          obj.error = '지출 칸에 작성하지 않은 부분이 있습니다.';
        }
      } else if (outcomeCounter > 1) {
        if (
          outcome1.category === '선택해주세요' ||
          !outcome1.cost ||
          !outcome1.desc
        ) {
          obj.error = '지출 칸에 작성하지 않은 부분이 있습니다.';
        } else if (
          outcome2.category === '선택해주세요' ||
          !outcome2.cost ||
          !outcome2.desc
        ) {
          obj.error = '지출 칸에 작성하지 않은 부분이 있습니다.';
        }
      }
    } else if (
      (income1.cost && !income1.desc) ||
      (!income1.cost && income1.desc)
    ) {
      obj.error = '수입 칸에 작성하지 않은 부분이 있습니다.';
    } else if (
      (income2.cost && !income2.desc) ||
      (!income2.cost && income2.desc)
    ) {
      obj.error = '수입 칸에 작성하지 않은 부분이 있습니다.';
    } else if (isNaN(income1.cost) || isNaN(income2.cost)) {
      obj.error = '수입의 금액 칸은 숫자만 입력해주세요.';
    }

    if (!outcome1.cost && !outcome1.desc) {
      if (incomeCounter === 1) {
        if (
          income1.category === '선택해주세요' ||
          !income1.cost ||
          !income1.desc
        ) {
          obj.error = '수입 칸에 작성하지 않은 부분이 있습니다.';
        }
      } else if (incomeCounter > 1) {
        if (
          income1.category === '선택해주세요' ||
          !income1.cost ||
          !income1.desc
        ) {
          obj.error = '수입 칸에 작성하지 않은 부분이 있습니다.';
        } else if (
          income2.category === '선택해주세요' ||
          !income2.cost ||
          !income2.desc
        ) {
          obj.error = '수입 칸에 작성하지 않은 부분이 있습니다.';
        }
      }
    } else if (
      (outcome1.cost && !outcome1.desc) ||
      (!outcome1.cost && outcome1.desc)
    ) {
      obj.error = '지출 칸에 작성하지 않은 부분이 있습니다.';
    } else if (
      (outcome2.cost && !outcome2.desc) ||
      (!outcome2.cost && outcome2.desc)
    ) {
      obj.error = '지출 칸에 작성하지 않은 부분이 있습니다.';
    } else if (isNaN(outcome1.cost) || isNaN(outcome2.cost)) {
      obj.error = '지출의 금액 칸은 숫자만 입력해주세요.';
    }
  }
  return obj;
};

export default validCheck;
