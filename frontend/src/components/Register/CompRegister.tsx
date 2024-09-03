import React from 'react';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { IMaskInput } from 'react-imask';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
  };

const currencies = [
    {
        value: '서울',
        label: '서울',
    },
    {
        value: '세종',
        label: '세종',
    },
    {
        value: '부산',
        label: '부산',
    },
    {
        value: '대구',
        label: '대구',
    },
    {
        value: '대전',
        label: '대전',
      },
    {
        value: '대전',
        label: '대전',
    },
    {
        value: '광주',
        label: '광주',
    },
    {
        value: '인천',
        label: '인천',
    },
    {
        value: '울산',
        label: '울산',
    },
    {
        value: '경기',
        label: '경기',
    },
    {
        value: '강원',
        label: '강원',
    },
    {
        value: '충남',
        label: '충남',
    },
    {
        value: '충북',
        label: '충북',
    },
    {
        value: '경남',
        label: '경남',
    },
    {
        value: '경북',
        label: '경북',
    },
    {
        value: '전남',
        label: '전남',
    },
    {
        value: '전북',
        label: '전북',
    },
    {
        value: '제주',
        label: '제주',
    },
  ];

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }
  
  const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
      const { onChange, ...other } = props;
      return (
        <IMaskInput
          {...other}
          mask="010-0000-0000"
          definitions={{
            '#': /[1-9]/,
          }}
          inputRef={ref}
          onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
          overwrite
        />
      );
    },
  );
  

const CompRegister = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [values, setValues] = React.useState({
        textmask: '010-0000-0000',
        numberformat: '1320',
      });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    return (
        <div>
            <hr className="border-b-2 border-gray-500" />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>대회명
                </div>
                <TextField id="filled-basic" label="대회명" variant="filled" className='w-80'/>
            </div>
            <hr  />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>대회 일시
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="대회 일시" />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <hr  />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>대회 종목
                </div>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Checkbox label="풀코스"/>
                    <Checkbox label="하프코스"/>
                    <Checkbox label="10km"/>
                    <Checkbox label="5km"/>
                </Box>
            </div>
            <hr  />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>대회 지역
                </div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="대회 지역"
                    defaultValue="EUR"
                    helperText="지역을 선택해주세요"
                    variant="filled"
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <hr  />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>주최 단체
                </div>
                <TextField id="filled-basic" label="주최 단체" variant="filled" />
            </div>
            <hr  />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>홈페이지
                </div>
                <TextField id="filled-basic" label="홈페이지" variant="filled" defaultValue="http://" className='w-96'
                />
            </div>
            <hr  />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>담당자 성명
                </div>
                <TextField id="filled-basic" label="담당자 성명" variant="filled" />
            </div>
            <hr  />
            <div className='flex justify-start items-center h-24'>
                <div className='w-48 text-center'>담당자 전화번호
                </div>
                <FormControl variant="standard">
                    <InputLabel htmlFor="formatted-text-mask-input">담당자 전화번호</InputLabel>
                    <Input
                    value={values.textmask}
                    onChange={handleChange}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom as any}
                    />
                </FormControl>
            </div>
            <div className='w-screen flex justify-center m-9 ph:m-0 ph:mt-9 ph:mb-9'>
            <Button variant="contained" endIcon={<SendIcon />} size='large' onClick={handleOpen}>
                대회 등록 하기
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    담당자에게 연락 부탁드립니다.
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                    문의 번호 : 010 - 0000 - 0000 
                </Typography>
                </Box>
            </Modal>
            </div>
        </div>
    );
};

export default CompRegister;