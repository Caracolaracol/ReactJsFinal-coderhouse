import '../Header/Header.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import Cartwidget from '../Cartwidget/Cartwidget';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

// MATERIAL UI MENU
function BasicMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Un Invento (Con un código que me quedó algo largo) para que aparezcan los submenus:
    let count = 0
    for (let properties in props) {
        count = count + 1
        console.log(properties)
    }
    const length = count - 1
    if (length === 5) {
        return (
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    onMouseEnter={handleClick}
                    
                >
                    <h2 className="nav__titles">{props.nombre}</h2> <ExpandMoreSharpIcon/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    disableRestoreFocus
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    onMouseLeave={handleClose}
                >
                    <MenuItem onClick={handleClose}>{props.titulo1}</MenuItem>
                    <MenuItem onClick={handleClose}>{props.titulo2}</MenuItem>
                    <MenuItem onClick={handleClose}>{props.titulo3}</MenuItem>
                    <MenuItem onClick={handleClose}>{props.titulo4}</MenuItem>
                    <MenuItem onClick={handleClose}>{props.titulo5}</MenuItem>

                </Menu>
            </div>
        );
    } else {
        return (
            <div>
                <Button
                    id="basic-button"
                    className="nav__titles"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    onMouseEnter={handleClick}
                    
                >
                    <h2 className="nav__titles">{props.nombre}</h2> <ExpandMoreSharpIcon/>
                </Button>
                <Menu
                    id="basic-menu"
                    className="nav__titles"
                    anchorEl={anchorEl}
                    open={open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    disableRestoreFocus
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    onMouseLeave={handleClose}
                >
                    <MenuItem id="d" onClick={handleClose}>{props.titulo1}</MenuItem>
                    <MenuItem onClick={handleClose}>{props.titulo2}</MenuItem>
                    <MenuItem onClick={handleClose}>{props.titulo3}</MenuItem>
                    <MenuItem onClick={handleClose}>{props.titulo4}</MenuItem>

                </Menu>
            </div>
        );
    }


}

// NAVBAR
function Navbar() {
    return (
        <div className="App-header__nav-container">
            <nav className="App-header__nav">
                <div className="nav__sections">
                    <BasicMenu
                        nombre="Productos"
                        titulo1="Proteinas Vegetales"
                        titulo2="Ganadores de Peso"
                        titulo3="Vitaminas y minerales"
                        titulo4="Quemadores de grasa"
                        titulo5="Probioticos"
                    />
                </div>

                <div className="nav__sections">
                    <BasicMenu
                        nombre="Que producto me sirve?"
                        titulo1="Masa muscular"
                        titulo2="Nutricion diaria"
                        titulo3="Recuperacion muscular"
                        titulo4="Perdida de grasa"
                    />
                </div>

                <div className="nav__sections">
                    <a href="https://github.com/Caracolaracol?tab=repositories"><h2 className="nav__titles">Envíos</h2></a>
                </div>

                <div className="nav__sections">
                    <a href="https://github.com/Caracolaracol?tab=repositories"><h2 className="nav__titles">Ubicación</h2></a>
                </div>

                <div className="nav__sections">
                    <a href="https://github.com/Caracolaracol?tab=repositories"><h2 className="nav__titles">Sobre nosotros</h2></a>
                </div>
                <Cartwidget />
            </nav>
        </div>
    )

}
export default Navbar;