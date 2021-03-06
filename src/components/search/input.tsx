import React, { FC } from 'react'

import InputBase, { InputBaseProps } from '@material-ui/core/InputBase'
import { alpha } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  form: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export interface InputProps extends InputBaseProps {
  refine?: (key: string) => void
}

const Input: FC<InputProps> = ({ refine, ...rest }) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (refine) {
      refine(event.target.value)
    }
  }

  return (
    <form className={classes.form}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        {...rest}
      />
    </form>
  )
}

export default Input
