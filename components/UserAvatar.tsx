import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export const UserAvatar = ({
  image,
  name,
  className,
}: {
  image: string
  name: string
  className?: string
}) => {
  return (
    <Avatar
      className={cn(
        'bg-blackA3 inline-flex h-[45px] w-[45px] cursor-pointer select-none items-center justify-center overflow-hidden rounded-full align-middle',
        className
      )}
    >
      <AvatarImage
        className="h-full w-full rounded-[inherit] object-cover"
        src={image}
        alt={name}
      />
      <AvatarFallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        JD
      </AvatarFallback>
    </Avatar>
  )
}
