program readfile

  real, dimension(5) :: line
  integer, parameter :: in_unit = 100 

  open(in_unit, file="data.dat", status="old", action="read")
  do i=1,2
    read(in_unit,*) line
  
    print *, line
  end do

end program readfile

