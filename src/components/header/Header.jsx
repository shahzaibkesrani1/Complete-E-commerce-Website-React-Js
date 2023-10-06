import React from 'react';
import email from '../../../src/assests/uil_envelope-alt.png'; // Corrected "assests" to "assets"
import phone from '../../assests/bx_bx-phone-call.png'; // Corrected the path
import { AiOutlineUser } from 'react-icons/ai'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { NavLink, json } from 'react-router-dom';
function Header() {
    const currencyDropdown = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    PKR
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    INR
                </a>
            ),
        },
    ];
    const languageDropdown = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Urdu
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    German
                </a>
            ),
        },
    ];
    const a = JSON.parse(localStorage.getItem("loginUser"))
    return (
        <div>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 font-serif">
                <div className="relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-between sm:gap-3 sm:pr-8 md:px-8">
                    <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
                        <div className='flex gap-11'>
                            <div className='flex gap-3'>
                                
                                <h2>{a}</h2>
                            </div>
                            <div className='flex gap-3'>
                                <img className='w-5' src={phone} alt="" />
                                <h2 className='text-white'>(12345) 67890</h2>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
                        <div className='flex gap-5'>
                            <Dropdown
                                overlay={
                                    <Menu>
                                        {languageDropdown.map(item => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                placement="bottomRight"
                                arrow
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        English
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <Dropdown
                                overlay={
                                    <Menu>
                                        {currencyDropdown.map(item => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                placement="bottomRight"
                                arrow
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        USD
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                            <NavLink to={"/login"}>
                                <button className='flex'>
                                    <h1>Login</h1><AiOutlineUser className='mt-1 w-4 ms-2' />
                                </button>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
