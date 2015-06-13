program writefile
  integer :: i,j
  integer, parameter :: out_unit = 20

  print *, "Enter two integers: "
  read (*,*) i, j

  open(unit=out_unit, file="results.txt", action="write", status="replace")
  write(out_unit,*) "i:",i, " j:",j
  write(out_unit,*) "i*j: ", i*j
  close(out_unit)

end program writefile
