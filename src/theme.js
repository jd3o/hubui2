import { createMuiTheme } from '@material-ui/core/styles';

const Theme = (type = 'dark') => {

    const theme = {
        mainTheme: createMuiTheme({
            palette: {
                type: type,
                primary: { main: '#29B6F6' }, // 27A2DA or 29B6F6
                secondary: { main: '#ffB300' }
                //error: { main: red },
            },
            props: {
                MuiAppBar: {
                    root: {
                        backgroundColor: '#272727'
                    }
                },
                MuiTableHead: {
                    root: {
                        backgroundColor: '#000000'
                    }
                }
            },
            overrides: {
                MuiButton: {
                    label: {
                        textTransform: 'none'
                    }
                },
                MuiTableHead: {
                    root: {
                        backgroundColor: '#000000'
                    }
                },
                MuiTableCell: {
                    root: {
                        padding: '5px'
                    }
                },
                MuiDialogActions: {
                    root: {
                        justifyContent: 'flex-start'
                    }
                },
                MuiTabs: {
                    root: {
                        backgroundColor: '#333333'
                    }
                },
                MuiChip: {
                    root: {
                        backgroundColor: '#555555'
                    },
                    clickable: {
                        //backgroundColor: 'red',
                        "&:hover": {
                            //backgroundColor: "blue !important"
                        },
                        "&:focus": {
                            // backgroundColor: "#29B6F6",
                            // color: "black"
                        }
                    }
                },
                MuiDialog: {
                    paper: {
                        backgroundColor: '#272727'
                    }
                },
                // MuiInputAdornment: {
                //     marginDense: {
                //         marginTop: '10px'
                //     }
                // },
                MuiSelect: {
                    selectMenu: {
                        height: '1.1875em'
                    }
                },
                MuiTooltip: {
                    tooltip: {
                        fontSize: 14
                    }
                },
                MuiTableSortLabel: {
                    icon: {
                        marginRight: '0px'
                    }
                }
            }

        }),
        blackTheme: createMuiTheme({
            palette: {
                type: type,
                primary: { main: '#000000' },
                secondary: { main: '#ffc107' }
            }
        })
    };

    return theme;
};

export default Theme;
