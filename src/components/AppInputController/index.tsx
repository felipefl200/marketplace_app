import { Control, Controller, FieldErrors, FieldValues, Path } from 'react-hook-form'

import { AppInput, AppInputProps } from '../AppInput'

interface AppInputControllerProps<TFieldValues extends FieldValues> extends Omit<
  AppInputProps,
  'onChangeText' | 'value' | 'error'
> {
  name: Path<TFieldValues>
  control: Control<TFieldValues>
  errors?: FieldErrors<TFieldValues>
}

export const AppInputController = <TFieldValues extends FieldValues>({
  name,
  control,
  errors,
  ...props
}: AppInputControllerProps<TFieldValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <AppInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          isDisabled={isSubmitting || props.isDisabled}
          {...props}
        />
      )}
    />
  )
}
