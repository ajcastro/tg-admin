/* eslint-disable class-methods-use-this */
import Model from './Model'

export default class ProfitLossByMember extends Model {
  resource() {
    return 'profit_loss_by_members'
  }
}
