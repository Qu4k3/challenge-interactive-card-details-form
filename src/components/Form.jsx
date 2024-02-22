import { useState } from "react";
import { useForm } from "react-hook-form";

export function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const [data, setData] = useState("");

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Cardholder Name</label>
        <input
          {...register("cardName",
            {
              required: true,
              maxLength: 50
            })
          }
          placeholder="e.g. Jane Appleseed"
          aria-invalid={errors.cardName ? "true" : "false"}
        />
        {errors.cardName?.type === "required" && (
          <p role="alert">Can't be blank</p>
        )}
      </div>
      <div>
        <label>Card Number</label>
        <input
          type="number"
          {...register("cardNumber",
            {
              required: true,
              maxLength: 50
            })
          }
          placeholder="e.g. 1234 5678 9123 0000"
          aria-invalid={errors.cardNumber ? "true" : "false"}
        />
        {errors.cardNumber?.type === "required" && (
          <p role="alert">Can't be blank</p>
        )}
      </div>
      <div>
        <div>
          <label>Exp. Date (MM/YY)</label>
          <div className="exp-date">
            <input
              type="number"
              {
              ...register("cardExpirationMonth",
                {
                  required: true,
                  min: 0,
                  max: 12
                })
              }
              placeholder="MM"
              aria-invalid={errors.cardExpirationMonth ? "true" : "false"}
            />
            <input
              type="number"
              {...register("cardExpirationYear",
                {
                  required: true,
                  min: 0,
                  max: 99
                })
              }
              placeholder="YY"
              aria-invalid={errors.cardExpirationYear ? "true" : "false"}
            />
          </div>
          {(errors.cardExpirationMonth?.type === "required" || errors.cardExpirationYear?.type === "required") && (
          <p role="alert">Can't be blank</p>
        )}
        </div>
        <div>
          <label>CVC</label>
          <input
            type="number"
            {...register("cardCVC",
              {
                required: true,
                min: 0,
                max: 999
              })
            }
            placeholder="e.g. 123"
            aria-invalid={errors.cardCVC ? "true" : "false"}
          />
          {errors.cardCVC?.type === "required" && (
          <p role="alert">Can't be blank</p>
        )}
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}
