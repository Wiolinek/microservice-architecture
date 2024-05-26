export const VisuallyHiddenInputStyle = {
  height: 1,
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
  ['& .MuiOutlinedInput-root']: { display: 'none' },
  ['& .Mui-error']: { position: 'absolute', bottom: '-26px', textTransform: 'lowercase' },
};
