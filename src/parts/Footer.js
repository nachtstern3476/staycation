import Button from 'elements/Button'
import React from 'react'
import IconText from './IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="col">
                    <IconText/>
                    <p className="brand-tagline">
                        We kaboom your beauty holiday instanly and memorable.
                    </p>
                </div>
                <div className="col-2 mr-5">
                    <h6 className="mt-2">For Beginners</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/register">
                                New Account
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/properties">
                                Start Booking a room
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/use-payment">
                                Use Payments
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="col-2 mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/careers">
                                Our Careers
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/privacy">
                                Privacy
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/terms">
                                Terms & Conditions
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h6 className="mt-2">Connect Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button isExternal type="link" href="mailto:support@staycation.id">
                                support@staycation.id
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="tel:+632122081996" isExternal>
                                021 - 2208 - 1996
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <span>Staycation, Kemang, Jakarta</span>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col text-center copyright">
                        Copyright 2021 - All rights reserved - Staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
