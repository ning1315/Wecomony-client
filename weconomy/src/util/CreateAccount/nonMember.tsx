import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

interface selects {
    selectedMeet: any;
    handleMeetChange: any;
  }
//
const NonMeber: React.FC<selects> = ({ selectedMeet, handleMeetChange }) => {

    return (
        <>
        <InputLabel id="demo-simple-select-helper-label">그룹 목록</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="meetList"
          value={selectedMeet || ''}
          onChange={handleMeetChange}
          style={{ width: '150px', textAlign: 'center' }}
        >
          <MenuItem value="선택해주세요">
            <div>선택 해주세요</div>
          </MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
        </>
    )
}

export default NonMeber;