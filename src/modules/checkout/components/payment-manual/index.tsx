import Alert from "@modules/common/icons/alert"

const PaymentManual = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 bg-yellow-100 w-full p-2">
        <Alert size={16} className="text-yellow-700" />
        <span className="text-small-regular text-yellow-700">
          <span className="font-semibold">Attention:</span> Remember to pay it manually.
        </span>
      </div>
    </div>
  )
}

export default PaymentManual
