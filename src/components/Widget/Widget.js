import React from 'react'
import AnnouncementIcon from '@material-ui/icons/Announcement';
import './widget.css'

function Widget() {
  return (
    <div className='widget'>
        <div className='widget__header'>
            <div className='widget__headerTop'>
                <h4>LinkedIn News</h4>
                <AnnouncementIcon/>
            </div>
            <div className='widget__body'>
                <ul className='widget__header__options'>
                    <li>
                        <h4>first</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                    <li>
                        <h4>second</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                    <li>
                        <h4>third</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                    <li>
                        <h4>fourth</h4>
                        <p>1h ago .100 reader</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className='widget__footer'>
            kjehdoeiwh
        </div>
    </div>
  )
}

export default Widget