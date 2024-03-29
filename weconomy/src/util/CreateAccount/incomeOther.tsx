import { useState } from 'react';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';

interface props {
  inCounter: any;
  incomeCounter: number;
  category: any;
  category2: any;
  cost: any;
  cost2: any;
  desc: any;
  desc2: any;
  onChange: any;
  onChange2: any;
}
//
const IncomeOther: React.FC<props> = ({
  inCounter,
  incomeCounter,
  category,
  category2,
  cost,
  cost2,
  desc,
  desc2,
  onChange,
  onChange2,
}: props) => {
  return (
    <>
      <div className="income-other">
        <div className="income-category">
          <InputLabel id="demo-simple-select-helper-label">카테고리</InputLabel>
          <Select
            className="selecCate"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="category"
            value={category || ''}
            onChange={onChange}
            style={{ textAlign: 'center' }}
          >
            <MenuItem value="선택해주세요">
              <div>선택해주세요</div>
            </MenuItem>
            <MenuItem value={'급여'}>급여</MenuItem>
            <MenuItem value={'잔돈'}>잔돈</MenuItem>
            <MenuItem value={'비상금'}>비상금</MenuItem>
            <MenuItem value={'기타'}>기타</MenuItem>
          </Select>
          <FormHelperText></FormHelperText>
        </div>
        <div className="income-cost">
          <TextField
            id="outlined-textarea"
            name="cost"
            label="금액"
            inputProps={{ maxLength: 9 }}
            placeholder="금액을 적어주세요"
            value={cost || ''}
            size="small"
            onChange={onChange}
            variant="outlined"
          />
        </div>
        <div className="income-description">
          <TextField
            id="outlined-textarea"
            name="desc"
            label="수입 내용"
            placeholder="수입 내용에 대한 설명"
            inputProps={{ maxLength: 12 }}
            value={desc || ''}
            size="small"
            onChange={onChange}
            variant="outlined"
          />
        </div>
        <div className="income-addBtn">
          <IconButton
            onClick={() => {
              inCounter('up');
            }}
            color="primary"
            aria-label="add to shopping cart"
          >
            <FiPlusSquare />
          </IconButton>
        </div>
      </div>

      {incomeCounter === 2 ? (
        <div className="income-other">
          <div className="income-category">
            <InputLabel id="demo-simple-select-helper-label">
              카테고리
            </InputLabel>
            <Select
              className="selecCate"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name="category"
              value={category2 || ''}
              onChange={onChange2}
              style={{ textAlign: 'center' }}
            >
              <MenuItem value="선택해주세요">
                <div>선택해주세요</div>
              </MenuItem>
              <MenuItem value={'급여'}>급여</MenuItem>
              <MenuItem value={'잔돈'}>잔돈</MenuItem>
              <MenuItem value={'비상금'}>비상금</MenuItem>
              <MenuItem value={'기타'}>기타</MenuItem>
            </Select>
            <FormHelperText></FormHelperText>
          </div>
          <div className="income-cost">
            <TextField
              id="outlined-textarea"
              label="금액"
              name="cost"
              inputProps={{ maxLength: 9 }}
              placeholder="금액을 적어주세요"
              value={cost2 || ''}
              size="small"
              onChange={onChange2}
              variant="outlined"
            />
          </div>
          <div className="income-description">
            <TextField
              id="outlined-textarea"
              label="수입 내용"
              placeholder="수입 내용에 대한 설명"
              inputProps={{ maxLength: 12 }}
              name="desc"
              value={desc2 || ''}
              size="small"
              onChange={onChange2}
              variant="outlined"
            />
          </div>
          <div className="income-addBtn">
            <IconButton
              onClick={() => inCounter('down')}
              color="primary"
              aria-label="add to shopping cart"
            >
              <FiMinusSquare />
            </IconButton>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default IncomeOther;

/*




<div className="outcome-other">
<div className="outcome-category">
  
    <InputLabel id="demo-simple-select-helper-label">
      카테고리
    </InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      name="category"
      value={outcome1.category || ''}
      onChange={changeOutcome1}
      style={{width: '150px',textAlign:'center'}}
    >
      <MenuItem value={10}>식비</MenuItem>
      <MenuItem value={20}>교통비</MenuItem>
      <MenuItem value={30}>패션</MenuItem>
    </Select>
    <FormHelperText>지출 항목을 골라주세요</FormHelperText>

</div>
<div className="outcome-cost">
  <TextField
    id="outlined-textarea"
    label="금액"
    placeholder="지출 금액"
    name="cost"
    value={outcome1.cost || ''}
    onChange={changeOutcome1}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-description">
  <TextField
    id="outlined-textarea"
    name="desc"
    label="지출 내용"
    placeholder="지출 내용에 대한 설명"
    value={outcome1.desc || ''}
    onChange={changeOutcome1}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-addBtn">
  <IconButton onClick={addOutcomeAcc} color="primary" aria-label="add to shopping cart">
    <AddShoppingCartIcon />
  </IconButton>
</div>
</div>
<div className="outcome-other">
<div className="outcome-category">
  
    <InputLabel id="demo-simple-select-helper-label">
      카테고리
    </InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      name="category"
      value={outcome2.category || ''}
      onChange={changeOutcome2}
      style={{width: '150px',textAlign:'center'}}
    >
      <MenuItem value={10}>식비</MenuItem>
      <MenuItem value={20}>교통비</MenuItem>
      <MenuItem value={30}>패션</MenuItem>
    </Select>
    <FormHelperText>지출 항목을 골라주세요</FormHelperText>

</div>
<div className="outcome-cost">
  <TextField
    id="outlined-textarea"
    label="금액"
    placeholder="지출 금액"
    name="cost"
    value={outcome2.cost || ''}
    onChange={changeOutcome2}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-description">
  <TextField
    id="outlined-textarea"
    label="지출 내용"
    placeholder="지출 내용에 대한 설명"
    name="desc"
    value={outcome2.desc || ''}
    onChange={changeOutcome2}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-addBtn">
  <IconButton aria-label="delete" disabled color="primary">
    <DeleteIcon />
  </IconButton>
</div>
</div>
*/
