import { Href, ImagePath } from '@/Constant';
import { OrganizationTabPaneProps } from '@/Types/Contact.type';
import Image from 'next/image';
import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';

const OrganizationTabPane: React.FC<OrganizationTabPaneProps> = ({ user }) => {
    const componentRef = useRef<HTMLDivElement>(null);
    return (
        <div className='profile-mail'>
            <div className="d-flex">
                <Image className='img-100 img-fluid m-r-20 rounded-circle update_img_5' src={`${ImagePath}/${user.image}`} width={100} height={100} alt='' />
                <div className="flex-grow-1 mt-0">
                    <h3>
                        <span className='first_name_5'>{user.name}</span>
                    </h3>
                    <p className='email_add_5'>{user.email}</p>
                    <ul>
                        <li>
                            <ReactToPrint
                                trigger={() => (
                                    <a href={Href}>{'Print'}</a>
                                )}
                                content={() => componentRef.current}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='email-general' ref={componentRef}>
                <h3>{'General'}</h3>
                <p>{'Email Address'}: <span className='font-primary email_add_5'>{user.email}</span></p>
                <div className='gender'>
                    <h3>{'Personal'}</h3>
                    <p>{'Gender'}: <span>{user.gender}</span></p>
                </div>
            </div>
        </div>
    )
}
export default OrganizationTabPane;