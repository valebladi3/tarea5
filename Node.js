
class Node
    attr_accessor :value,:next_node
    def initialize val,ref
        @value=val
        @ref=ref 
    end
end
class LinkedList
    def initialize val
        @head=Node.new(val,nil)
    end
    
    def add(value)
        current=@head
        while current.next_node!=nil
            current=current.next_node
        end 
        current.next_node=Node.new(value,nil)
        self    
    end
    def delete(val)
        current=@head
        if current.value==val
            @head=@head.next_node
        else
            current = @head
            while (current!=nil)&&(current.next_node!=nil)&&((current.next_node).value!=val)
                current=current.next_node
            end 

            if (current != nil)&&(current.next_node!=nil)
                current.next_node=(current.next_node).next_node
            end
        end
    end
    def display
        current=@head
        full_list=[] 
        while current.next_node!=nil 
            full_list+=[current.value.to_s]
            current=current.next_node
        end
        full_list+=[current.value.to_s]
        puts full_list.join(",")
    end
end
puts "Give me the values until you press -1:"
input=gets.chomp.to_i
ending=-1
output = LinkedList.new(input)
while input!=ending
    input=gets.chomp.to_i
    if input!=ending
        output.add(input)
    end
end
puts "Display LinkedList:"
output.display
puts "Which number you want to delet?"
input=gets.chomp.to_i
output.delete(input)
puts "Actualizating"
output.display
puts "Program Exit"
