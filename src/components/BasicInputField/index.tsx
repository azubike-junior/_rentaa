import arrowDown from '../../images/arrow-down.svg'
import eye from '../../images/eye.svg'
import { IHookInputProps } from '../../interfaces'
import { classNames } from '../../utils/classNames'

export function HookInput({
  label,
  info,
  placeholder,
  required,
  className = '',
  select,
  errors,
  name,
  show,
  type,
  textArea,
  textAreaClass,
  disabled,
  register,
  message,
  value,
  onClick,
}: IHookInputProps) {
  return (
    <div className={className}>
      <div className="flex flex-col w-full">
        <label
          className="mb-2 text-xs md:text-base text-secondary-blue font-dm-sans"
          htmlFor={name}
        >
          {label} {required && <span className=" ml-1 text-red-600">*</span>}
        </label>
        <div
          className={classNames(
            disabled
              ? 'px-0 border-0 '
              : 'flex justify-center border-2 px-4 rounded ',
          )}
        >
          {textArea ? (
            <textarea
              value={value}
              className={classNames(
                !errors && 'focus:border-primary-blue',
                errors && 'border-red-500 focus:border-red-500',
                disabled && ' bg-lightCream w-full px-6',
                textAreaClass && textAreaClass,
                'py-3 text-sm md:text-base md:px-4 w-full focus:outline-none font-dm-sans',
              )}
            />
          ) : (
            <input
              className={classNames(
                !errors && 'focus:border-primary-blue',
                errors && 'border-red-500 focus:border-red-500',
                disabled && ' bg-lightCream w-full px-6',
                'py-1 h-10 text-sm md:h-14 md:text-base md:px-2 w-full rounded-lg outline-none font-dm-sans',
              )}
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
            />
          )}
          <div className="mt-3 lg:mt-5 mr-1">
            {show && <img src={eye} className="w-4 h-4" alt="" />}
            {select && <img src={arrowDown} className="w-4 h-4" alt="" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export function SelectInput({
  required,
  label,
  name,
  register,
  selectArray,
  errors,
  message,
  className,
  maxLength,
  minLength,
  pattern,
  disabled,
  handleChange,
  setState,
}: IHookInputProps) {
  return (
    <div className={className}>
      <div className="flex flex-col w-full">
        <label
          className="mb-2 text-xs md:text-base text-secondary-blue font-dm-sans"
          htmlFor={name}
        >
          {label} {required && <span className=" ml-1 text-red-600">*</span>}
          {errors && (
            <span className="text-red-600 pl-4 text-base">
              {message}
            </span>
          )}
        </label>
        <div
          className={classNames(
            !errors && 'focus:border-green-600',
            errors && 'border-red-500 focus:border-red-500',
            disabled && 'px-0 border-0 ',
            'flex justify-center border-2 px-4 rounded ',
          )}
        >
          <select
            {...register(name, {
              maxLength,
              minLength,
              pattern,
              required,
            })}
            onClick={setState}
            className={classNames(
              // disabled && " bg-lightCream w-full px-6",
              'py-1 h-10 text-sm md:h-14 md:text-base md:px-2 w-full rounded-lg bg-transparent outline-none font-dm-sans',
            )}
          >
            {selectArray?.map((_item: any) => {
              return (
                // <div key={}>
                <option value={_item.value}>{_item.text}</option>
                // </div>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export function InputField({
  label,
  rest,
  placeholder,
  required,
  className = '',
  select,
  errors,
  name,
  show,
  type,
  textArea,
  textAreaClass,
  disabled,
  register,
  value,
  message,
  onClick,
  validate,
  minLength,
  maxLength,
  pattern,
  onChange,
  optional,
  naira
}: IHookInputProps) {
  // console.log(">>>>>>", errors?.type);
  return (
    <div className={className}>
      <div className="flex flex-col w-full">
        <label
          className="mb-2 text-xs md:text-base text-secondary-blue font-dm-sans"
          htmlFor={name}
        >
          {label} {required && <span className=" ml-1 text-red-600">*</span>}
          {optional && <span className=" ml-1 text-bgAsh">optional</span>}
          {errors && (
            <span className="text-red-600 pl-4 text-base">{message}</span>
          )}
        </label>
        <div
          className={classNames(
            !errors && 'focus:border-green-600',
            errors && 'border-red-500 focus:border-red-500',
            disabled && 'bg-lightCream w-full  border-0 ',
            'flex justify-center border-2 px-4 rounded ',
          )}
        >
          <div className="mt-3 lg:mt-5 mr-1">
            {naira && (
              <p className=' text-base'>&#8358;</p>
            )}
            {select && (
              <img src={arrowDown} className="w-4 h-4 cursor-pointer" alt="" />
            )}
          </div>
          {textArea ? (
            <textarea
              {...register(name, {
                required,
                minLength,
                maxLength,
              })}
              value={value}
              placeholder={placeholder}
              className={classNames(
                disabled && ' bg-lightCream w-full px-6',
                textAreaClass && textAreaClass,
                'py-3 text-black text-sm md:text-base md:px-4 w-full focus:outline-none font-dm-sans',
              )}
            />
          ) : (
            <input
              {...register(name, {
                required,
                validate,
                pattern,
                minLength,
                maxLength,
              })}
              className={classNames(
                disabled && ' bg-lightCream w-full px-6',
                'py-1 h-10 text-sm md:h-14 md:text-base md:px-2 w-full rounded-lg outline-none font-dm-sans',
              )}
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              {...rest}
            />
          )}
          <div className="mt-3 lg:mt-5 mr-1">
            {show && (
              <img
                onClick={onClick}
                src={eye}
                className="w-4 h-4 cursor-pointer"
                alt=""
              />
            )}
            {select && (
              <img src={arrowDown} className="w-4 h-4 cursor-pointer" alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
