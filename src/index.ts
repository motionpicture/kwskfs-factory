/**
 * kwskfs-factory
 */

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as CreditCardAuthorizeActionFactory from './factory/action/authorize/creditCard';
import * as MenuItemEventReservationOfferAuthorizeActionFactory from './factory/action/authorize/offer/eventReservation/menuItem';
import * as SeatEventReservationOfferAuthorizeActionFactory from './factory/action/authorize/offer/eventReservation/seat';
import * as PecorinoAuthorizeActionFactory from './factory/action/authorize/pecorino';
import * as OrderActionFactory from './factory/action/trade/order';
import * as PayActionFactory from './factory/action/trade/pay';
import * as RefundActionFactory from './factory/action/trade/refund';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as ReturnOrderActionFactory from './factory/action/transfer/return/order';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import * as ClientEventFactory from './factory/clientEvent';
import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import CreativeWorkType from './factory/creativeWorkType';
import * as EventFactory from './factory/event';
import * as FoodEventFactory from './factory/event/food';
import * as SportsEventFactory from './factory/event/sports';
import EventStatusType from './factory/eventStatusType';
import EventType from './factory/eventType';
import IMultilingualString from './factory/multilingualString';
import * as MenuItemEventReservationOfferFactory from './factory/offer/eventReservation/menuItem';
import * as SeatEventReservationOfferFactory from './factory/offer/eventReservation/seat';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as OrganizationFactory from './factory/organization';
import * as CorporationOrganizationFactory from './factory/organization/corporation';
import * as RestaurantOrganizationFactory from './factory/organization/restaurant';
import * as SportsTeamOrganizationFactory from './factory/organization/sportsTeam';
import CorporationOrganizationIdentifier from './factory/organizationIdentifier/corporation';
import OrganizationType from './factory/organizationType';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import PaymentMethodType from './factory/paymentMethodType';
import * as PersonFactory from './factory/person';
import PersonType from './factory/personType';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as EventReservationFactory from './factory/reservation/event';
import ReservationStatusType from './factory/reservationStatusType';
import ReservationType from './factory/reservationType';

import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as PayCreditCardTaskFactory from './factory/task/payCreditCard';
import * as PayPecorinoTaskFactory from './factory/task/payPecorino';
import * as PlaceOrderTaskFactory from './factory/task/placeOrder';
import * as RefundCreditCardTaskFactory from './factory/task/refundCreditCard';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as SendOrderTaskFactory from './factory/task/sendOrder';

import * as TaskFactory from './factory/task';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';
import * as URLFactory from './factory/url';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import errors = errors;
export import errorCode = ErrorCode;

export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export import creditCard = CreditCardAuthorizeActionFactory;
        export import pecorino = PecorinoAuthorizeActionFactory;
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            export namespace eventReservation {
                export import menuItem = MenuItemEventReservationOfferAuthorizeActionFactory;
                export import seat = SeatEventReservationOfferAuthorizeActionFactory;
            }
        }
    }

    export namespace trade {
        // tslint:disable-next-line:no-shadowed-variable
        export import order = OrderActionFactory;
        export import pay = PayActionFactory;
        export import refund = RefundActionFactory;
    }

    export namespace transfer {
        export namespace print {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = PrintActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = PrintActionFactory.IAttributes;
            export import IRecipient = PrintActionFactory.IRecipient;
            export import ticket = PrintTicketActionFactory;
        }

        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import order = ReturnOrderActionFactory;
        }

        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
            // tslint:disable-next-line:no-shadowed-variable
            export import order = SendOrderActionFactory;
        }
    }

    export namespace consume {
        export namespace use {
        }
    }
}

export namespace paymentMethod {
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
    }
}
export import clientEvent = ClientEventFactory;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
}
export import creativeWorkType = CreativeWorkType;
export namespace event {
    export import IEvent = EventFactory.IEvent;
    export import food = FoodEventFactory;
    export import sports = SportsEventFactory;
}
export import eventStatusType = EventStatusType;
export import eventType = EventType;
export type multilingualString = IMultilingualString;
export namespace offer {
    export namespace eventReservation {
        export import menuItem = MenuItemEventReservationOfferFactory;
        export import seat = SeatEventReservationOfferFactory;
    }
}
export import order = OrderFactory;
export import orderStatus = OrderStatus;
export namespace organization {
    export import IOrganization = OrganizationFactory.IOrganization;
    export import corporation = CorporationOrganizationFactory;
    export import sportsTeam = SportsTeamOrganizationFactory;
    export import restaurant = RestaurantOrganizationFactory;
}
export namespace organizationIdentifier {
    export import corporation = CorporationOrganizationIdentifier;
}
export import organizationType = OrganizationType;
export import ownershipInfo = OwnershipInfoFactory;
export import priceCurrency = PriceCurrency;
export namespace place {
}
export import paymentMethodType = PaymentMethodType;
export import person = PersonFactory;
export import personType = PersonType;
export import programMembership = ProgramMembershipFactory;
export import placeType = PlaceType;
export namespace reservation {
    // tslint:disable-next-line:no-shadowed-variable
    export import event = EventReservationFactory;
}
export import reservationStatusType = ReservationStatusType;
export import reservationType = ReservationType;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import ITask = TaskFactory.ITask;
    export import cancelCreditCard = CancelCreditCardTaskFactory;
    export import cancelSeatReservation = CancelSeatReservationTaskFactory;
    export import placeOrder = PlaceOrderTaskFactory;
    export import refundCreditCard = RefundCreditCardTaskFactory;
    export import returnOrder = ReturnOrderTaskFactory;
    export import sendEmailMessage = SendEmailMessageTaskFactory;
    export import sendOrder = SendOrderTaskFactory;
    export import payCreditCard = PayCreditCardTaskFactory;
    export import payPecorino = PayPecorinoTaskFactory;
}
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import url = URLFactory;
