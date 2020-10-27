import React from 'react'

const Payment = () => {
    return(
        <div class="payment-form dark">
            <div class="container_payment">
                <div class="block-heading">
                    <h2>Card Payment</h2>
                    <p>This is an example of a Mercado Pago integration</p>
                </div>
                <div class="form-payment">
                    <div class="products">
                        <h2 class="title">Summary</h2>
                        <div class="item">
                            <span class="price" id="summary-price"></span>
                            <p class="item-name">Book x <span id="summary-quantity"></span></p>
                        </div>
                        <div class="total">Total<span class="price" id="summary-total"></span>
                        </div>
                    </div>
                    <div class="payment-details">
                        <form action="/process_payment" method="post" id="paymentForm">
                            <h3 class="title">Buyer Details</h3>
                            <div class="row">
                                <div class="form-group col">
                                    <label for="email">E-Mail</label>
                                    <input id="email" name="email" type="text" class="form-control"></input>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-5">
                                    <label for="docType">Document Type</label>
                                    <select id="docType" name="docType" data-checkout="docType" type="text" class="form-control"></select>
                                </div>
                                <div class="form-group col-sm-7">
                                    <label for="docNumber">Document Number</label>
                                    <input id="docNumber" name="docNumber" data-checkout="docNumber" type="text" class="form-control"/>
                                </div>
                            </div>
                            <br/>
                            <h3 class="title">Card Details</h3>
                            <div class="row">
                                <div class="form-group col-sm-8">
                                    <label for="cardholderName">Card Holder</label>
                                    <input id="cardholderName" data-checkout="cardholderName" type="text" class="form-control"/>
                                </div>
                                <div class="form-group col-sm-4">
                                    <label for="">Expiration Date</label>
                                    <div class="input-group expiration-date">
                                        <input type="text" class="form-control" placeholder="MM" id="cardExpirationMonth" data-checkout="cardExpirationMonth"
                                        onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete='off'/>
                                        <span class="date-separator">/</span>
                                        <input type="text" class="form-control" placeholder="YY" id="cardExpirationYear" data-checkout="cardExpirationYear"
                                        onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete='off'/>
                                    </div>
                                </div>
                                <div class="form-group col-sm-8">
                                    <label for="cardNumber">Card Number</label>
                                    <input type="text" class="form-control input-background" id="cardNumber" data-checkout="cardNumber"
                                        onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete='off'/>
                                </div>
                                <div class="form-group col-sm-4">
                                    <label for="securityCode">CVV</label>
                                    <input id="securityCode" data-checkout="securityCode" type="text" class="form-control"
                                        onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete='off'/>
                                </div>
                                <div id="issuerInput" class="form-group col-sm-12 hidden">
                                    <label for="issuer">Issuer</label>
                                    <select id="issuer" name="issuer" data-checkout="issuer" class="form-control"></select>
                                </div>
                                <div class="form-group col-sm-12">
                                    <label for="installments">Installments</label>
                                    <select type="text" id="installments" name="installments" class="form-control"></select>
                                </div>
                                <div class="form-group col-sm-12">
                                    <input type="hidden" name="transactionAmount" id="amount" value="10" />
                                    <input type="hidden" name="paymentMethodId" id="paymentMethodId" />
                                    <input type="hidden" name="description" id="description" />
                                    <br/>
                                    <button type="submit" class="btn btn-primary btn-block">Pay</button>
                                    <br/>
                                    <a id="go-back">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" class="chevron-left">
                                        <path fill="#009EE3" fill-rule="nonzero"id="chevron_left" d="M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z"></path>
                                        </svg>
                                        Go back to Shopping Cart
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;