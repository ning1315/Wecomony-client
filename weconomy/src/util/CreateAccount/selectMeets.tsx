import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

interface selects {
  selectedMeet: any;
  handleMeetChange: any;
}

const SelectMeets: React.FC<selects> = ({ selectedMeet, handleMeetChange }) => {
  const userNow = useSelector((state: RootState) => state.userStatus?.groups);

  const loop = userNow.map((res: any, index:any) => {
    return <MenuItem key={index} value={`${res.id}`}>{`${res.meetName}`}</MenuItem>;
  });

  return (
    <>
      <InputLabel id="demo-simple-select-helper-label">가계부 목록</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        name="meetList"
        value={selectedMeet || ''}
        onChange={handleMeetChange}
        style={{ width: '150px', textAlign: 'center' }}
      >
        <MenuItem value="선택해주세요">
          <div>선택해주세요</div>
        </MenuItem>
        {loop}
      </Select>
      <FormHelperText></FormHelperText>
    </>
  );
};

export default SelectMeets;
